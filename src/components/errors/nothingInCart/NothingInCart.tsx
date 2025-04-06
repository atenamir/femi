import { Link } from "react-router-dom";
import basket from "../../../assets/images/nullBasket.png";

function NothingInCart() {
  return (
    <div className="h-[70vh] w-full my-6 flex items-center justify-center flex-col text-center ">
      <img src={basket} alt="" width="350px" />
      <h1 className="text-xl my-4">
        Your cart looks a little lonely—let's find something to fill it!
      </h1>
      <button
        className="px-3 py-2 bg-pink-300 text-white text-2xl rounded-lg 
          cursor-pointer active:scale-90 transition"
      >
        <Link to="/">Let's Start</Link>
      </button>
    </div>
  );
}

export default NothingInCart;
