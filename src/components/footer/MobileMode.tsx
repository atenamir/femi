import { BiLogoInstagram, BiLogoTelegram, BiLogoYoutube } from "react-icons/bi";
import AccordionItem from "../accordion/AccordionItem";
import { useState } from "react";

function MobileMode() {
  // === state for managing more or less text ===
  const [isOpen, setIsOpen] = useState(false);
  // === about us text ===
  const text =
    "Welcome to Femi shop, your go to beauty destination!We bring you the best in skincare, makeup, and hair care, carefully selected to make you feel confident and radiant every day.Since 2019, we’ve been committed to quality, affordability, and the latest beauty trends. Whether you're looking for everyday essentials or luxury self-care treats, we’ve got everything you need to shine!Beauty made easy, just for you!Shop with us and discover your new favorites today.";
  //   === handle click for managing more or less text ===
  const handleCLick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer>
      <h1 className="p-3 text-center">Follow Us For More Offers !</h1>
      {/* === social media icons === */}
      <div className="flex items-center justify-center">
        <BiLogoInstagram className="text-pink-400 text-3xl mr-3 cursor-pointer hover:scale-110 transition" />
        <BiLogoTelegram className="text-blue-300 text-3xl mr-3 cursor-pointer hover:scale-110 transition" />
        <BiLogoYoutube className="text-red-500 text-3xl mr-3 cursor-pointer hover:scale-110 transition" />
      </div>
      {/*  === newsLetter */}
      <div className="mt-7 w-[90%] mx-auto z-50">
        <h3 className="text-center font-bold text-lg">News Letter </h3>
        <form className=" w-[90%] mx-auto mt-3 p-1 h-14 rounded-xl relative">
          <input
            type="email"
            className="text-[12px] w-full border outline-0 border-gray-400 p-1 h-full rounded-xl"
            placeholder="enter youre email"
          />
          <button className=" bg-pink-400 p-1 rounded-md cursor-pointer text-white absolute right-0 mt-2 mr-3">
            Submit
          </button>
        </form>
      </div>
      {/* ===accordion items === */}
      <div className="mt-12 mx-3">
        <AccordionItem
          title="How To Order?"
          className="border-b border-gray-700 w-[90%] mx-auto"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quis, natus beatae reiciendis voluptatibus nulla
            reprehenderit cum doloribus obcaecati eaque nesciunt deleniti
            voluptatum quo officia doloremque adipisci temporibus distinctio
            eligendi?
          </p>
        </AccordionItem>
        <AccordionItem
          title="Contact Us"
          className="border-b border-gray-700 w-[90%] mx-auto"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            magni odit nulla laboriosam consectetur repudiandae accusantium aut
            aliquam assumenda fuga commodi blanditiis pariatur reiciendis
            aliquid id, rerum impedit unde autem?
          </p>
        </AccordionItem>
        <AccordionItem
          title="Customer Servises"
          className="border-b border-gray-700 w-[90%] mx-auto"
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            itaque dolore suscipit.
          </p>
        </AccordionItem>
      </div>

      {/* === about shop === */}
      <div className="mt-12 p-3 mx-3">
        <h1 className="mb-5 text-xl font-bold">Femi Cosmetic Shop: </h1>
        <p className="text-justify">
          {isOpen ? text : `${text.substring(1, 99)} ...`}

          <button
            className="mx-3 border p-1 rounded-lg mt-2 cursor-pointer"
            onClick={handleCLick}
          >
            {isOpen ? "show less" : "show more"}
          </button>
        </p>
      </div>

      {/* === copyRight === */}
      <div className="mt-10 pb-4 border-t w-[90%] mx-auto border-gray-500">
        <h1 className="text-center mt-3">Allright receved</h1>
        <p className="mt-2 text-center text-gray-500 ">
          &copy;Created By Atena Mir
        </p>
      </div>
    </footer>
  );
}

export default MobileMode;
