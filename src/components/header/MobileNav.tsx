import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Accordion from "../accordion/AccordionItem";

function MobileNav() {
  const { isLogin, logOut } = useAuth();
  // === useState for opening/closing navbar menu(mobile mode) ===
  const [isOpen, setIsOpen] = useState(false);
  //  === function for hanlde open/close menu ===
  const handleCLick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="xl:hidden z-10">
      {/* ===side bar === */}
      <motion.div
        className="bg-white scroll-auto fixed w-[60%] h-screen top-0 left-0 shadow-2xl"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ ease: "easeInOut" }}
      >
        {/* ===close button=== */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="cursor-pointer"
          onClick={handleCLick}
        >
          <IoMdClose className="m-3 text-2xl" />
        </motion.button>
        {/* === menu items === */}
        <ul className="flex flex-col items-center justify-center mx-4 mt-12">
          <Accordion
            title="face makeup"
            className="w-[90%] text-center bg-gray-200 p-2 rounded shadow-lg my-5"
          >
            <ul>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=foundation">Foundation</Link>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=blush">Blush</Link>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=bronzer">Bronzer</Link>
              </motion.li>
            </ul>
          </Accordion>

          <Accordion
            title="eye makeup"
            className="w-[90%] text-center bg-gray-200 p-2 rounded shadow-lg my-5"
          >
            <ul>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=eyeshadow">Eyeshadow</Link>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=eyebrow">Eyebrow</Link>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=eyeliner">Eyeliner</Link>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=mascara">mascara</Link>
              </motion.li>
            </ul>
          </Accordion>

          <Accordion
            title="lip makeup"
            className="w-[90%] text-center bg-gray-200 p-2 rounded shadow-lg my-5"
          >
            <ul>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=lip_liner">Lipliner</Link>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-300 p-1 rounded-lg mb-4"
              >
                <Link to="/products?product_type=Lipstick">Lipstick</Link>
              </motion.li>
            </ul>
          </Accordion>

          <motion.li
            className="mt-6 w-[90%] px-4 bg-gray-200 py-3 rounded shadow-lg my-5"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link to="/products?product_type=nail_polish">nail polish</Link>
          </motion.li>
        </ul>
        {/* general items */}
        <ul className="flex flex-col items-center justify-center mx-4 mt-12 border-t border-t-gray-200">
          <motion.li
            className="mt-10 w-[90%] text-center bg-gray-200 p-2 rounded shadow-lg my-5"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link to='/cart'>Youre Cart</Link>
          </motion.li>
          <motion.li
            className="w-[90%] text-center bg-gray-200 p-2 rounded shadow-lg my-5"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Blogs
          </motion.li>
          {
            // === if user logeed in, show log out ===
            isLogin ? (
              <motion.li
                className="flex items-center justify-center w-[90%] text-center
                 p-2 rounded shadow-lg my-5 bg-red-200 border border-red-300 cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={logOut}
              >
                Logout <CiLogin className="mx-1 text-lg" />
              </motion.li>
            ) : (
              //  === otherwise show login ===
              <motion.li
                className="w-[90%] text-center bg-gray-200 p-2 rounded shadow-lg my-5"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/login">Login</Link>
              </motion.li>
            )
          }
        </ul>
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.7 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        onClick={handleCLick}
        className="ml-3"
      >
        <TbMenuDeep className="text-[1.6rem] cursor-pointer" />
      </motion.button>
    </nav>
  );
}

export default MobileNav;
