import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "../utils/helper/cookie";

//  === custom hook for cheching if user already loggedin or not ===
const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null | unknown>(null);
  // === use effect for render the chechAuth func just for once ===
  useEffect(() => {
    // === func for check access token ===
    const checkAuth = async () => {
      const tokens = await getCookie("keyVal");
      setIsLogin(!!tokens?.access_token);
      setToken(tokens?.access_token);
    };
    checkAuth();
  }, [token]);
  //  === for log out(it gonna remove cookie from cookie) ===
  const logOut = () => {
    const userId = localStorage.getItem("userId");
    if (userId) localStorage.removeItem(`cart_user${userId}`);
    removeCookie("keyVal");
    setToken(null);
    localStorage.removeItem("userId");
    window.location.reload();
  };
  return { logOut, isLogin };
};

export default useAuth;
