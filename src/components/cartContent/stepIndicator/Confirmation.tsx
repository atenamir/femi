import { useNavigate } from "react-router-dom";
import checkMark from "../../../assets/images/checkMark.jpg";
import { useCartStore } from "../../../store/cartStore/cartStore";
import { ICartItem } from "../../../store/cartStore/types";
import OrderItem from "../../orderItem/OrderItem";

function Confirmation() {
  const { items } = useCartStore();
  const navigate = useNavigate();
  // === handle redirecting to hame and cleaning user's cart ===
  const handleReset = () => {
    const userId = localStorage.getItem("userId");
    localStorage.removeItem(`cart_user${userId}`);
    navigate("/");
    window.location.reload()
  };
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
      <img src={checkMark} alt="confirmation" width="250px" />
      <h1 className="text-center text-lg my-12 bg-pink-300 py-2 px-6 rounded-lg text-white shadow">
        Your order has been successfully placed! <br />
        Thank you for shopping with us
      </h1>
      {/* === order details ==== */}
      <div className="w-full bg-gray-100 p-2 rounded-lg my-4 ">
        <h1 className="text-center my-3 font-medium text-lg">Order Details</h1>
        {items.length > 0 &&
          items.map((item: ICartItem) => <OrderItem {...item} key={item.id} />)}
      </div>
      {/* ===back to home button ==== */}
        <button 
        onClick={handleReset}
        className="text-lg py-2 px-5 bg-pink-300 my-4 text-white rounded-lg active:scale-95 transition cursor-pointer">
          Back To Home
        </button>
    </div>
  );
}

export default Confirmation;
