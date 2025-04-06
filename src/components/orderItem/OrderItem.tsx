import { ICartItem } from "../../store/cartStore/types";

function OrderItem({ name, image, price, color, qty }: ICartItem) {
  return (
    <div className="bg-gray-50 shadow p-2 rounded-lg w-[90%] mx-auto my-3">
      <img src={image} alt={name} width="70px" />
      <p>
        product name: <span className="text-pink-500">{name}</span>
      </p>
      <p className="my-2 border-t border-gray-300 pt-3">price : {price}$</p>
      <p className="my-2 border-t border-gray-300 pt-3">Quantity: {qty}</p>
      {color !== "" ? (
        <div className="flex items-center my-2 border-t border-gray-300 pt-3">
          <p>Color : </p>
          <span
            style={{ background: color }}
            className="block w-3 h-3 rounded-full mx-2"
          ></span>
        </div>
      ): ('')}
    </div>
  );
}

export default OrderItem;
