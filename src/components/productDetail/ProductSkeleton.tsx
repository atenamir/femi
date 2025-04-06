function ProductSkeleton() {
  return (
    <div className="w-full mb-3 md:grid md:grid-cols-2">
      <div className="w-full flex justify-center flex-col">
        <div
          className="mx-auto my-6 w-[220px] md:w-[320px]
         animate-pulse h-[220px] md:h-[350px] rounded-md bg-pink-100"
        ></div>

        <div className="flex justify-center">
          <div className="bg-pink-100 p-3 h-15 w-15 rounded-xl "></div>

          <div className="bg-pink-100 ml-2 p-3 h-15 w-15 rounded-xl "></div>
        </div>
      </div>
      {/* === more details === */}
      <div className="my-9 mx-4">
        <div className="h-5 w-[17rem] bg-pink-100 animate-pulse rounded-xl"></div>
        {/* === price and description === */}
        <div className="mt-4 w-[17rem] rounded-xl h-5 bg-pink-100 animate-pulse"></div>
        <div className="mt-4 w-[12rem] rounded-xl h-5 bg-pink-100 animate-pulse"></div>
        <div className="mt-4 w-[15rem] rounded-xl h-5 bg-pink-100 animate-pulse"></div>
        <div className="mt-4 w-[90%] rounded-xl h-17 bg-pink-100 animate-pulse mx-auto"></div>
      </div>
      {/* === similar product ==== */}
      <div className="p-1 mx-12 w-[170px] my-5 rounded-md h-[340px] flex flex-col justify-between">
        <div className="mt-4 w-[15rem] rounded-xl h-5 bg-pink-100 animate-pulse"></div>
        <div className="w-[150px] mx-auto mt-3 animate-pulse h-[150px] bg-pink-100 rounded"></div>
        <div className="w-full">
          <div className="w-[96%] bg-pink-100 animate-pulse h-[8px] rounded"></div>
          <div className="w-[40%] mt-3 bg-pink-100 animate-pulse h-[8px] rounded"></div>
        </div>
        <div className="w-[40%] mt-3 bg-pink-100 animate-pulse h-[8px] rounded"></div>
        <div className="w-[60%] mx-auto mb-3 bg-pink-100 animate-pulse h-9 rounded"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
