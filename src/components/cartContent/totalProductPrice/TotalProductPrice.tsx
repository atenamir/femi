import { useEffect, useState } from "react";
import { useCartStore } from "../../../store/cartStore/cartStore";

function TotalProductPrice() {
  const { items } = useCartStore();
  // === calc subtotal ===
  const subTotal = items.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);
  // === define and calculating discount code ===
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState(0);
  const [message, setMessage] = useState<string | boolean>("");
  const [finalPrice, setFinalPrice] = useState(0);
const [invalid, setInvalid] = useState(false)
  const discountDB: Record<string, number> = {
    OFF10: 10,
    OFF30: 30,
    OFF25: 25,
  };
  const applyDiscountCode = () => {
    const normalizedCode = code.trim().toUpperCase();
    const discount = discountDB[normalizedCode];
    if (discount) {
      setPercent(discount);
      let newPrice = subTotal * (1 - discount / 100);
      setFinalPrice(newPrice);
      setMessage('Your discount code has been applied. Enjoy your savings!')
      setInvalid(false)
    } else {
      setPercent(0);
      setFinalPrice(subTotal);
      setMessage('Invalid Discount Code!')
      setInvalid(true)
    }
  };

  useEffect(() => {
    setFinalPrice(subTotal * (1 - percent / 100));
  }, [percent, subTotal]);

  return (
    <div className="w-full md:w-[50%] mx-auto rounded p-3 bg-gray-100 shadow mb-3">
      <h1 className="text-center text-xl">Price Details</h1>
      <form className="my-2 flex items-center justify-start">
        <label htmlFor="">Discount Code: </label>
        <input
          type="text"
          className="border outline-0 border-pink-300 rounded mx-2 p-1 bg-gray-50 w-[150px]"
          onChange={(e) => setCode(e.target.value)}
        />
      </form>
      <button
        onClick={applyDiscountCode}
        className="my-2 p-2 text-center mx-auto w-[100%] bg-pink-200 text-white rounded-lg 
        cursor-pointer active:scale-95 transition"
      >
        Apply Code
      </button>
     {
        message && (
            <p className={`mx-3 my-5 p-2 rounded-lg text-white text-center ${!invalid?"bg-green-500" :"bg-red-400"}`}>
            {message}
          </p>
        )
     }
      <div>
        <h2 className="my-3">
          Total Price:{" "}
          <span className="mx-1 text-lg font-medium">{finalPrice.toFixed(2)}$</span>
        </h2>      
      </div>
    </div>
  );
}

export default TotalProductPrice;
