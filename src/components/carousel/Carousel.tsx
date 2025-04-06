import { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { useProductsState } from "../../store/products/productStore";
import CarouselSkeletone from "./CarouselSkeletone";
import { FaFireAlt } from "react-icons/fa";

interface ICarouselProp {
  title: string;
  className: string;
}
function Carousel({ title, className }: ICarouselProp) {
  // === get carousel menu by useRef ===
  const carouselRef = useRef<HTMLDivElement>(null);
  // === function for next button ===
  const handleNextBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  // === function for prev button ===
  const handlePrevBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  //   ===get products array and api for sending request ===
  const { products, getAllProduct, isLoading } = useProductsState();

  useEffect(() => {
    getAllProduct();
  }, []);
  // === limit products to show in carousel ===
  const limitProducts = products.slice(560, 575);
  //   === useState for checking where buttons can scroll ===
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [ScrollRight, setScrollRight] = useState(true);
  //   === function for checking  if we should scroll or not ===
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setScrollRight(clientWidth + scrollLeft < scrollWidth);
    }
  };

  // === put checkScroll function in useEffect ===
  useEffect(() => {
    if (carouselRef.current)
      carouselRef.current?.addEventListener("scroll", checkScroll);

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className={className}>
      {/* === title === */}
      <h1 className="absolute top-[-5px] ">
        <span className="bg-white lg:text-2xl flex items-center lg:px-13 p-2 text-lg rounded-b-xl">
          <FaFireAlt className="lg:mx-2 text-pink-800" />
          {title}
          <FaFireAlt className="lg:mx-2 text-pink-800" />
        </span>
      </h1>
      {/* === controll buttons === */}
      <button
        disabled={!canScrollLeft}
        onClick={handlePrevBtn}
        className=" bg-white rounded-full absolute top-[50%] left-0 ml-2 cursor-pointer"
      >
        <GrFormPreviousLink
          className={`${
            canScrollLeft
              ? "text-2xl text-gray-500 border rounded-full"
              : "text-2xl text-gray-300 border rounded-full"
          }`}
        />
      </button>
      <button
        onClick={handleNextBtn}
        disabled={!ScrollRight}
        className="bg-white rounded-full absolute top-[50%] right-0 mr-2 cursor-pointer"
      >
        <GrFormNextLink
          className={`${
            ScrollRight
              ? "text-2xl text-gray-500 border rounded-full"
              : "text-2xl text-gray-300 border rounded-full"
          }`}
        />
      </button>
      <div
        ref={carouselRef}
        className=" hide-scrollbar mt-8 flex overflow-x-scroll scroll-smooth lg:w-[90%]"
      >
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <CarouselSkeletone key={index} />
            ))
          : limitProducts.map((product) => (
              <CarouselItem key={product.id} {...product} />
            ))}
      </div>
    </div>
    //
  );
}

export default Carousel;
