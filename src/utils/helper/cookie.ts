import Cookies from "js-cookie";
import { encryptJwt, decryptJwt } from "./jwt";

// === function for setting cookie ===
export const setCookie = async (key: string, data: Record<string, unknown>) => {
  const encryptedData = await encryptJwt(data);
  Cookies.set(key, encryptedData, { expires: 5 });
};
//  === function for getting cookie ===
export const getCookie = async (key: string) => {
  const cookieValue = Cookies.get(key);
  if (!cookieValue) return null;
  return await decryptJwt(cookieValue);
};
//  === function for removing cookie ===
export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
