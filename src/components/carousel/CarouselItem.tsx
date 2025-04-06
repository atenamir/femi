import { IProducts } from "../../store/products/types";
import { Link } from "react-router-dom";

function CarouselItem({ image_link, name, price, product_colors,id }: IProducts) {
 
 // === limiting product_color ====
const limitedProductColor = product_colors.slice(0,3)
  return (
    <div
      className="bg-white p-1 mx-2 min-w-[170px] my-5 rounded-md h-[340px] flex 
    flex-col items-center justify-between shadow-lg"
    >
      <img src={image_link} alt="" className="w-[150px] h-[150px]" />
      {/*  ===details === */}
      <div className="text-start">
        <h3 className="text-[12px] mt-6 mx-2 text-justify">{name}</h3>
        <p className=" mt-2 mx-2 text-justify font-serif font-bold">
          {price} $
        </p>
        {/* === product colors === */}
        <div className="w-full flex justify-center my-2">
          {limitedProductColor.map((color , index) => (
            <span key={index}
              style={{ backgroundColor: color.hex_value }}
              className="inline-block w-4 h-4 rounded-full mx-1 p-[1px]"
            ></span>
          ))}
        </div>
      </div>
      <Link to={`/productDetails/${id}`}>
      <button className="cursor-pointer bg-pink-300 text-white py-1 px-2 mb-3 rounded-md hover:scale-110 transition-transform">
        Buy It Now
      </button>
      </Link>
    </div>
  );
}

export default CarouselItem;
