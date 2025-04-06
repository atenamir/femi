import CartItem from "../CartItem";
import { useCartStore } from "../../../store/cartStore/cartStore";
import { ICartItem } from "../../../store/cartStore/types";
import NothingInCart from "../../errors/nothingInCart/NothingInCart";
import TotalProductPrice from "../totalProductPrice/TotalProductPrice";

function FirstStep() {
  // === getting products in cart ===

  const { items } = useCartStore();
  
  return (
    <div className="w-[80%] mx-auto">
    {items.length > 0 ?(
        <div>
          <h1 className="text-xl">
        <span className="w-4 border-2 px-2 text-pink-400 rounded-full mx-2">
          1
        </span>
        My Cart
      </h1>
      {/* === cart items ==== */}
      <div className="w-full my-8">
        {items.map((item:ICartItem) => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      {/* === price details === */}
      <TotalProductPrice />
        </div>
    ) :(
      <NothingInCart />
    )}
    </div>
  );
}

export default FirstStep;
