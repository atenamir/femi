import React, { useEffect, useState } from "react";
import { useProductsState } from "../../store/products/productStore";
import { IProducts } from "../../store/products/types";
import ProductCard from "./ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductBodySkeleton from "./ProducsContentSkeleton";
import { useSearchParams } from "react-router-dom";

function ProductsSectionGrid() {
  const {
    filteredList,
    getAllProduct,
    isLoading,
  } = useProductsState();

  // === set pages for pagination ===
  const [page, setPage] = useState(1);
  const itemsPerPage = 25;

  // === fixing search bar and filtered products ===
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

 
  const finalFilteredList = filteredList.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query)
  );

  const counter = finalFilteredList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(event.target);
    
  };

  useEffect(() => {
    getAllProduct();
  }, [getAllProduct]);

  return (
    <div className="mx-2 my-5">
      {isLoading ? (
        <div className="w-full my-5 mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 25 }).map((_, index) => (
            <ProductBodySkeleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          {/* === product card section === */}
          <div className="my-5 mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {counter.map((product: IProducts) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* === Pagination === */}
          <Stack spacing={2} className="flex justify-center items-center">
            <Pagination
              count={Math.ceil(finalFilteredList.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="secondary"
            />
          </Stack>
        </div>
      )}
    </div>
  );
}

export default ProductsSectionGrid;
