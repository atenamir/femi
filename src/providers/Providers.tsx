import React, { useEffect } from "react";
import { getCookie } from "../utils/helper/cookie";
import { useStore } from "../store/authStore/store";
import { RouterProvider } from "react-router";
import router from "../constants/router";
import { ToastContainer} from 'react-toastify';
// === Define the type for the props of the component, expecting ReactNode as children ===
interface IProvidersProps {
  children?: React.ReactNode;
}
// ===Authorize component that runs a check on the cookie and then renders the children ===
const Authorize: React.FC<IProvidersProps> = ({ children }) => {
  const { setState } = useStore();
  useEffect(() => {
    // === Define an asynchronous function to get the cookie value ===
    const test = async () => {
      const res = await getCookie("keyVal");
      if (res !== null && res !== undefined) setState(res);
    };
    test();
  }, []);

  return <>{children}</>;
};
// === Providers component, which wraps its children with the Authorize component ===
function Providers({ children }: IProvidersProps) {
  return (
    <Authorize>
      <RouterProvider router={router}/>
      <ToastContainer />
      {children}
    </Authorize>
  );
}

export default Providers;
