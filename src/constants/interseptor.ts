import axios from "axios";
import { getCookie, setCookie } from "../utils/helper/cookie";

// === Function to get Access Token from cookies ===
const getAccessToken = async () => {
  const accessToken = await getCookie("keyVal");
  return accessToken?.access_token;
};

// === Function to get Refresh Token from cookies ===
const getRefreshToken = async () => {
  const refreshToken = await getCookie("keyVal");
  return refreshToken?.refresh_token;
};

// === Define an Axios instance with base configuration ===
export const client = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

// === Request Interceptor to add Authorization token to every request ===
client.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`; // Add token to headers
  }
  return config;
});

// === Response Interceptor to handle token expiration and refresh ===
client.interceptors.response.use(
  (response) => response ,// If response is successful, return it as is
  async (error) => {
    const originalRequest = error.config;

    // === Check if the error is 401 (Unauthorized) and retry has not been attempted ===
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // === Get Refresh Token from cookies ===
        const refreshToken = await getRefreshToken();

        // === If Refresh Token exists, send a request to refresh the token ===
        if (refreshToken) {
          const response = await client.post("/auth/refresh-token", {
            refreshToken: refreshToken,
          });

          // === Extract new access and refresh tokens from response data ===
          const newAccessToken = response?.data.access_token;
          const newRefreshToken = response?.data.refresh_token;

          // === Get the latest stored cookie ===
          const lastCookie = await getCookie("keyVal");

          // === Update the cookie with new token values ===
          const newCookie = {
            ...lastCookie,
            access_token: newAccessToken,
            refresh_token: newRefreshToken,
          };
          await setCookie("keyVal", newCookie);

          // === Update default Authorization header for future requests ===
          client.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`; 

          // === Update Authorization header for the failed request and retry ===
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // === Retry the failed request with the new access token ===
          return client(originalRequest);
        }
      } catch (err) {
        console.error("Token refresh failed:", err);
      }
    }

    return Promise.reject(error); // Reject the error if token refresh fails
  }
);
