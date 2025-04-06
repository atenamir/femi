import {
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoYoutube,
  BiCheck,
  BiSolidEditLocation,
  BiHeadphone,
} from "react-icons/bi";

function DesktopMode() {
  return (
    <footer className="grid grid-cols-3">
      {/* === left section === */}
      <section className="flex items-center justify-center flex-col">
        <h1 className="p-3 text-center text-xl mt-3">
          Follow Us For More Offers !
        </h1>
        {/* === social media icons === */}
        <div className="flex items-center justify-center">
          <BiLogoInstagram className="text-pink-400 text-4xl mr-3 cursor-pointer hover:scale-110 transition" />
          <BiLogoTelegram className="text-blue-400 text-4xl mr-3 cursor-pointer hover:scale-110 transition" />
          <BiLogoYoutube className="text-red-500 text-4xl mr-3 cursor-pointer hover:scale-110 transition" />
        </div>
        {/*  === newsLetter */}
        <div className="mt-7 w-[90%] mx-auto z-50">
          <h3 className="text-center font-bold text-lg">News Letter </h3>
          <form className=" w-[60%] mx-auto mt-3 p-1 h-14 rounded-xl relative">
            <input
              type="email"
              className=" w-full border outline-0 border-gray-400 p-1 h-full rounded-xl"
              placeholder="enter youre email"
            />
            <button className=" bg-pink-400 p-1 rounded-md cursor-pointer text-white absolute right-0 mt-2 mr-3">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* === right section === */}
      <section className="col-span-2 mt-4  grid grid-cols-3">
        <ul className="flex flex-col items-center justify-center ">
          <h1 className="text-center font-bold text-lg py-3">How To Order ?</h1>
          <li className="py-3 flex items-center">
            <span>
              <BiCheck className="text-2xl text-green-300 mr-1" />
            </span>
            Standard Shipping
          </li>
          <li className="py-3 flex items-center">
            <span>
              <BiCheck className="text-2xl text-green-300 mr-1" />
            </span>
            Express Shipping
          </li>
          <li className="py-3 flex items-center">
            <span>
              <BiCheck className="text-2xl text-green-300 mr-1" />
            </span>
            Overnight Shipping
          </li>
          <li className="py-3 flex items-center">
            <span>
              <BiCheck className="text-2xl text-green-300 mr-1" />
            </span>
            Custom
          </li>
        </ul>

        <ul className="flex flex-col items-center justify-center ">
          <h1 className="text-center font-bold text-lg py-3">Contact Us</h1>
          <li className="py-3 flex items-center">
            <span>
              <BiSolidEditLocation className="text-2xl text-green-500 mr-1" />
            </span>{" "}
            Address
          </li>
          <li className="py-3 flex items-center">
            <span>
              <BiHeadphone className="text-2xl text-red-500 mr-1" />
            </span>{" "}
            0016 123 123
          </li>
          <li className="py-3 flex items-center">
            <span>
              <BiLogoTelegram className="text-2xl text-blue-500 mr-1" />
            </span>{" "}
            0016 231 332 876
          </li>
          <li className="py-3 flex items-center">
            <span>
              <BiLogoInstagram className="text-2xl text-pink-500 mr-1" />
            </span>{" "}
            @femi_shop
          </li>
        </ul>

        <ul className="flex flex-col items-center justify-center ">
          <h1 className="text-center font-bold text-lg py-3">
            Customer Servises
          </h1>
          <li className="py-3 flex items-center">Fast Response</li>
          <li className="py-3 flex items-center">Appreciation Message</li>
          <li className="py-3 flex items-center">24/7 Support</li>
          <li className="py-3 flex items-center">Follow-Up Message</li>
        </ul>
      </section>
      {/* ===copiRight === */}
      <div className="col-span-3 p-2 text-center w-[90%] mx-auto mt-5 border-t border-gray-500">
        <h1 className="mt-3">Allright receved</h1>
        <p className="mt-2 text-gray-500 ">&copy;Created By Atena Mir</p>
      </div>
    </footer>
  );
}

export default DesktopMode;
