import { IProducts } from "../../store/products/types";
import { useProductsState } from "../../store/products/productStore";
import ProductSkeleton from "./ProductSkeleton";
import { useState } from "react";
import { HiOutlineGift } from "react-icons/hi2";
import { TbCreditCardPay } from "react-icons/tb";
import SimilarProduct from "./SimilarProduct";
import { useCartStore } from "../../store/cartStore/cartStore";

// ==== define type for cart items ====
interface ICartItem {
  id: number;
  name: string;
  price: number;
  color: string | 'no-color';
  image: string;
  qty: number;
}
function ProductDetail({
  name,
  image_link,
  product_colors=[],
  price,
  brand,
  description,
  id,
}: IProducts) {
  const { isLoading } = useProductsState();
  //   === useState for keeping color's hex ===
  const [setColor, setSetColor] = useState<string | null>(null);
  // === function for set color's name in useState ===
  const handleClick = (color: string) => {
    setSetColor(color);
  };
  // === get add to cart function ===
  const addToCart = useCartStore((state) => state.addToCart);
  const items = useCartStore((state) => state.items);
  // === function for handling add to cart ===
  const handle_add_to_cart = () => {
    const newItem: ICartItem = {
      id: id,
      name: name,
      price: parseFloat(price),
      color: setColor!,
      image: image_link,
      qty: 1,
    };
    addToCart(newItem);
  };
  // === check if we have same products in cart (for changing add to cart button color) ===
  const isInCart = !product_colors || product_colors.length === 0
  ? items.some((item) => item.id === id)
  : !!setColor && items.some((item) => item.id === id && item.color.toLowerCase() === setColor.toLowerCase());

  // === limiting colors ====
  const limitedColor = product_colors.slice(0, 8);
  return (
    <>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="w-full mb-3 xl:grid xl:grid-cols-2">
          {/* === more image box === */}
          <div className="w-full flex justify-center flex-col">
            <div>
              <img
                src={image_link}
                alt="product image"
                className="mx-auto my-6 h-[220px] w-[220px] md:w-[320px] md:h-[320px]"
              />
            </div>
            <div className=" flex items-center justify-center">
              <button className="mx-2 h-15 w-15 border border-gray-200 rounded-xl ">
                <img
                  src={image_link}
                  alt=""
                  className="h-15 w-15 p-[2px] rounded-xl"
                />
              </button>
              <button className="bg-gray-200 p-3 h-15 w-15 text-[12px] rounded-xl cursor-pointer">
                More...
              </button>
            </div>
          </div>
          {/* === more details === */}
          <div className="my-9 mx-4 border-t border-gray-200 md:border-none">
            ‍<h1 className="font-bold text-2xl">{name}</h1>
            <p className="text-pink-200">{brand}</p>
            {/* === color category === */}
            <div className="mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                {limitedColor.map((color) => (
                  <button
                    className={`cursor-pointer w-42 h-10  items-center justify-start  flex rounded-full ml-1  ${
                      setColor == color.hex_value
                        ? "border border-pink-200 transition scale-110 bg-pink-50"
                        : ""
                    }`}
                    onClick={() => handleClick(color.hex_value)}
                  >
                    <span
                      style={{ backgroundColor: color.hex_value }}
                      className="mx-2 inline-block w-5 h-5 rounded-full mt-[3px]"
                    ></span>
                    <span className="mx-1 text-sm">{color.colour_name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* === price and description === */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-xl font-bold ">Cost : {price} $</p>
              <div className="mt-2 flex items-center">
                <span className="text-gray-400 mr-2">
                  <s>18.25 $</s>
                </span>
                <span className="flex items-center w-20 bg-pink-300 py-1 px-3 rounded-lg text-white">
                  23% <HiOutlineGift className="ml-1 text-xl" />
                </span>
              </div>
              {/* == add to cart button === */}
              <button
                onClick={handle_add_to_cart}
                disabled={isInCart || (product_colors.length > 0 && !setColor)}
                className={`flex items-center justify-center text-white
               px-12 py-2 mt-4 rounded-xl w-[100%] transition active:scale-90 cursor-pointer
             ${isInCart ? "bg-green-500 cursor-not-allowed": "bg-pink-400 hover:bg-pink-600" } `} >
                {isInCart ? " Added To Cart" : " Add To Cart"}
                <TbCreditCardPay className="ml-2 text-xl" />
              </button>
              <h3 className="mt-10 text-pink-700">Description</h3>
              <p className="mt-3 border p-2 rounded-lg border-gray-200 text-justify">
                {description}
              </p>
            </div>
            {/* === similar products === */}
          </div>
          <div className="col-span-2 mx-12 md:border-t border-gray-200">
            <SimilarProduct />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
