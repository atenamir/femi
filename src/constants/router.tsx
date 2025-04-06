import { createBrowserRouter } from "react-router";
import Login from "../pages/login/Login";
import Root from "../pages/root/Root";
import SignUp from "../pages/signUp/SignUp";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Products from "../pages/products/Products";
import Cart from "../pages/cart/Cart";
import NotFoundPage from "../pages/404/NotFoundPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path:'*',
    element: <NotFoundPage />
  }
]);

export default router;
