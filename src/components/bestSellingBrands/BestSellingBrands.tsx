import logo1 from "../../assets/images/brands/benefit.png";
import logo2 from "../../assets/images/brands/dior.png";
import logo3 from "../../assets/images/brands/clinique.png";
import logo4 from "../../assets/images/brands/nyx.png";
import logo5 from "../../assets/images/brands/loreal.png";
import logo6 from "../../assets/images/brands/maybelline.png";
import { useNavigate } from "react-router-dom";

// === images log ====
// = image type
interface IImageType {
    image_url:string,
    name:string
}
const imageURL = [
  {
    image_url: logo1,
    name:"benefit"
  },
  {
    image_url: logo2,
    name:"dior"
  },
  {
    image_url: logo3,
    name:"clinique"
  },
  {
    image_url: logo4,
    name:"nyx"
  },
  {
    image_url: logo5,
    name:"l'oreal"
  },
  {
    image_url: logo6,
    name:"maybelline"
  },

];
function BestSellingBrands() {
  // === useNavigate for Redirecting the user to the product page===
  const navigate = useNavigate()
  // === function for after userClicked on each brand, it gonna rediret to products page ===
   const handleCLick = (name:string)=>{
     navigate(`/products?brand=${encodeURIComponent(name)}`)
   }  
  return (
  <div className="border-b border-gray-300 pb-3 mx-auto w-[90%] my-17 font-extralight text-pink-500 grid grid-cols-2 p-1 items-center md:grid-cols-3 lg:grid-cols-6">
    <h1 className="col-span-2 border-b border-gray-300 pb-4  text-center text-2xl md:col-span-3 lg:col-span-6">
        Best Selling Brands
        </h1>
        {imageURL.map((image: IImageType,index)=>(
            <img src={image.image_url} 
                alt="cosmetic brand" 
                key={index}
                onClick={()=>handleCLick(image.name)}
                className="cursor-pointer w-28 mt-5 mx-auto hover:scale-110 transition" title={image.name}/>
        ))}
  </div>
  )
}

export default BestSellingBrands;
