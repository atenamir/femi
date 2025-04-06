import { IProducts } from "../../store/products/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function ProductCard({name,image_link,price,product_colors, id}: IProducts) {
 
    // === limiting product_color ====
    const limitedColor = product_colors.slice(0,5)
    return (
    <motion.div
      animate={{ scale: 1 }}
      whileHover={{
        y: -5,
        scale: 1.03,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.01)",
      }}
      className="grid grid-cols-3 border border-gray-200 w-[90%] mx-auto my-2 p-1 
      rounded-lg md:flex md:items-center md:justify-between md:flex-col "
    >
      <img src={image_link} alt={name} className=" w-[80px] md:w-[120px]"/>
    {/* === details === */}
    <div className="col-span-2 flex flex-col items-center justify-between">
     <h2 className="text-center">{name}</h2>
     <p>{price}$</p>
     {/* === color pallete === */}
     <div className="flex items-center justify-center my-2">
        {limitedColor.map((color,index)=>(
            <span  
            key={index}
            style={{backgroundColor:color.hex_value}}
            className="block w-3 h-3 rounded-full ml-[1px] border border-gray-200"></span>
        ))}
     </div>
      {/* === show product details button ==== */}
      <Link to={`/productDetails/${id}`} >
      <button className="bg-pink-300 py-1 px-2 my-2 rounded-lg text-white hover:scale-105
      cursor-pointer transition">
        See Product
        </button>
      </Link>
    </div>
    </motion.div>
  );
}

export default ProductCard;
