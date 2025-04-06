import SearchBox from "../searchBox/SearchBox";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CiLogin, CiUser } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiSpa } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";

function DesktopNav() {
  //  === get isLogin and logOut for checking if user logged in or not ===
  const { isLogin, logOut } = useAuth();
  // === useState for showing item's options when user hover on it ===
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="grid grid-cols-3 items-center w-full z-50">
      <Link to="/">
        <img
          src={logo}
          alt="femi logo"
          width="100px"
          className="cursor-pointer"
        />
      </Link>
      <SearchBox />

      {/* login and cart section */}
      <section className="w-full flex items-center justify-end pr-8">
        {isLogin ? (
          <button
            onClick={logOut}
            className="flex items-center bg-red-400 text-white p-2 mx-3 shadow-lg rounded cursor-pointer w-23"
          >
            Logout <CiLogin className="text-2xl ml-1" />
          </button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="bg-gray-200 p-2 mx-3 shadow-lg rounded cursor-pointer"
          >
            <Link to="/login" className="flex items-center">
              Login / Signup <CiUser className="text-lg ml-1" />
            </Link>
          </motion.button>
        )}
        {/* === cart button === */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="bg-pink-400 text-white p-2 rounded cursor-pointer"
        >
          <Link to="/cart">
            <MdOutlineAddShoppingCart className="text-2xl" />
          </Link>
        </motion.button>
      </section>
      {/* === navbar Section === */}
      <section
        className="w-[90%] bg-gray-100 mt-6 p-4 text-lg col-span-3 mx-auto
       rounded-xl flex items-center justify-between shadow-md"
      >
        {/* === menu items === */}
        <div>
          <ul className="flex items-center justify-center">
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative border-r pr-4 border-gray-300"
              onMouseEnter={() => setOpenDropdown("face")}
            >
              Face Makeup
              {openDropdown === "face" && (
                <ul
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute bg-gray-200 w-[270px] h-[130px] left-0 bottom-[-156px] rounded shadow-lg"
                >
                  <li className="py-2 px-3 border-b border-gray-300 w-full text-center">
                    <Link to="/products?product_type=foundation">
                      Foundation
                    </Link>
                  </li>
                  <li className="py-2 px-3 border-b border-gray-300 w-full text-center">
                    <Link to="/products?product_type=blush">Blush</Link>
                  </li>
                  <li className="py-2 px-3 w-full text-center">
                    <Link to="/products?product_type=powder">Bronzer</Link>
                  </li>
                </ul>
              )}
            </motion.li>

            <motion.li
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative border-r pr-4 border-gray-300 ml-3"
              onMouseEnter={() => setOpenDropdown("lip")}
            >
              Lip Makeup
              {openDropdown === "lip" && (
                <ul
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute bg-gray-200 w-[270px] h-[130px] left-0 bottom-[-156px] rounded shadow-lg
            flex flex-col items-center justify-center"
                >
                  <li className="py-2 px-3 border-b border-gray-300 w-full text-center">
                    <Link to="/products?product_type=lipstick">Lipstick</Link>
                  </li>
                  <li className="py-2 px-3 w-full text-center">
                    <Link to="/products?product_type=lip_liner">Lipliner</Link>
                  </li>
                </ul>
              )}
            </motion.li>

            <motion.li
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative border-r pr-4 border-gray-300 ml-3"
              onMouseEnter={() => setOpenDropdown("eye")}
            >
              Eye Makeup
              {openDropdown === "eye" && (
                <ul
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute bg-gray-200 w-[270px] h-[170px] left-0 bottom-[-196px] rounded shadow-lg"
                >
                  <li className="py-2 px-3 border-b border-gray-300 w-full text-center">
                    <Link to="/products?product_type=mascara">Mascara</Link>
                  </li>
                  <li className="py-2 px-3 border-b border-gray-300 w-full text-center">
                    <Link to="/products?product_type=eyeshadow">Eyeshadow</Link>
                  </li>
                  <li className="py-2 px-3 w-full text-center border-b border-gray-300">
                    <Link to="/products?product_type=eyeliner">Eyeliner</Link>
                  </li>
                  <li className="py-2 px-3 w-full text-center">
                    <Link to="/products?product_type=eyebrow">Eyebrow</Link>
                  </li>
                </ul>
              )}
            </motion.li>
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="ml-4"
            >
              <Link to="/products?product_type=nail_polish"> Nail Polish</Link>
            </motion.li>
          </ul>
        </div>
        {/* === general items like offers, off , blogs etc ... */}
        <div>
          <ul className="flex items-center justify-center">
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mr-4 border-r pr-2 border-r-gray-200"
            >
              <span className="w-full flex items-center">
                Newest <FaRegStar className="ml-1 text-pink-400" />
              </span>
            </motion.li>
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mr-4"
            >
              <span className="w-full flex items-center">
                Offers <BiSpa className="ml-1 text-pink-400" />
              </span>
            </motion.li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default DesktopNav;
