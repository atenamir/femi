import { useProductsState } from "../../store/products/productStore";

function ProductBodySkeleton() {
  const { error } = useProductsState();
  return (
    <>
      {!error && (
        <div
          className="grid grid-cols-3 w-[90%] mx-auto my-2 p-1 rounded-lg md:flex
     md:items-center md:justify-between md:flex-col bg-pink-50"
        >
          <div className="w-[80px] md:w-[120px] h-[80px] md:h-[120px] bg-pink-100 animate-pulse"></div>
          <div className="col-span-2 flex flex-col items-start justify-between w-full">
            <div className="bg-pink-100 animate-pulse h-3 w-[90%] my-2 rounded-md"></div>
            <div className="bg-pink-100 animate-pulse h-3 w-[80%] my-2 rounded-md"></div>
            <div className="bg-pink-100 animate-pulse h-3 w-[70%] my-2 rounded-md"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductBodySkeleton;
