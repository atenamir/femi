import { RiCloseLargeLine } from "react-icons/ri";
import { ICartItem } from "../../store/cartStore/types";
import { useCartStore } from "../../store/cartStore/cartStore";

function CartItem({name , image , qty ,price , color , id}:ICartItem) {

  const {increaseQty , decreaseQty , removeFromCart} = useCartStore()
// ===calculating each product price ====
let productPrice = (price*qty).toFixed(2)

  return (
    <div
      className="relative grid grid-cols-3 sm:grid-cols-3 my-3 border pb-3 border-gray-200
    lg:grid-cols-6 py-2 px-3 rounded-lg"
    >
      <img src={image} alt="product name" width="100px" />
      <p className="col-span-2 flex items-center">{name}</p>
      <p className="mx-2 flex items-center">{productPrice} $</p>
      {/* === qty buttons control === */}
      <div className="flex items-center justify-center w-[50%] text-center mt-3">
        <button
        onClick={()=>increaseQty(id , color)}
          className="bg-pink-300 w-5 h-5 text-white text-2xl rounded-full cursor-pointer
      flex items-center justify-center active:bg-pink-400 transition"
        >
          +
        </button>
        <span className="mx-2">{qty}</span>
        <button
        onClick={()=>decreaseQty(id , color)}
          className="bg-pink-300 w-5 h-5 text-white text-2xl rounded-full cursor-pointer
      flex items-center justify-center active:bg-pink-400 transition"
        >
          -
        </button>
      </div>
      {/* === product color ==== */}
     {
      color?.length > 0 && (
        <div className="flex items-center justify-start">
        <p>color :</p>
        <div style={{background:color}} className="w-4 h-4 rounded-full mx-1"></div>
      </div>
      )
     }
      {/* === remove product === */}
      <div 
      onClick={()=>removeFromCart(id , color)}
      className="absolute top-0 right-2 cursor-pointer active:scale-75 transition">
        <RiCloseLargeLine className="mt-3 text-red-700 text-lg"/>
      </div>
    </div>
  );
}

export default CartItem;
