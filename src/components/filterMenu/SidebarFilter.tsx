// === fitering side for desktop mode ===
import { useState } from "react";
import {
  Slider,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useProductsState } from "../../store/products/productStore";
import { IFiltersState } from "./types";

function SidebarFilter() {
  const { brands, minPrice, maxPrice, filterProducts, productTypes } =
    useProductsState();

  const [filters, setFilters] = useState<IFiltersState>({
    brand: "",
    product_type: "",
    priceRange: [minPrice ?? 0, maxPrice ?? 77],
  });

  // === Handle product type and brand selection ===
  const handleSelection = (type: "brand" | "product_type", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
  };
  // ==== Handle price range change ===
  const handlePrice = (_: Event, value: number | number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: value as number[],
    }));
  };
  // === function for appling filters ===
  const applyFilters = () => {
    filterProducts(filters);
  };
  return (
    <div className="bg-white mt-7 w-[92%] h-[73vh] border border-gray-200 sticky top-5 mb-3 rounded-lg p-2 shadow mx-auto">
      {/* === price filter === */}
      <div>
        <h1 className="text-xl my-2 ml-3 font-bold">Price:</h1>
        <Slider
          value={filters.priceRange}
          onChange={handlePrice}
          min={minPrice ?? 0}
          max={maxPrice ?? 77}
          step={5}
          valueLabelDisplay="auto"
          className="!text-pink-300 !w-[80%] mx-14"
        />
        <div className="w-[80%] text-gray-500 flex items-center justify-between mx-auto">
          <span>{minPrice ?? 0}$</span>
          <span>{maxPrice ?? 77}$</span>
        </div>
      </div>
      {/* ==== Product Type Filter  === */}
      <div className="w-[95%] mx-auto ">
        <h1 className="text-xl mt-6 border-t border-gray-200 pt-3  font-bold">
          Product Type:
        </h1>
        <ToggleButtonGroup
          value={filters.product_type}
          exclusive
          onChange={(_, value) => handleSelection("product_type", value)}
          aria-label="product type"
          className="!grid !grid-cols-2 xl:!grid-cols-4 mt-4 gap-x-7 gap-y-3 "
        >
          {productTypes.map((type) => (
            <ToggleButton key={type} value={type}>
              {type}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      {/* ==== brand filter === */}
      <div className="w-[95%] mx-auto">
        <h3 className="text-xl mt-6 border-t border-gray-200 pt-3 font-bold">
          Brand :
        </h3>
        <Autocomplete
          freeSolo
          options={brands.slice(0, 3)}
          value={filters.brand}
          onInputChange={(_, newVal) => handleSelection("brand", newVal)}
          renderInput={(params) => (
            <TextField {...params} placeholder="Search brand..." />
          )}
          className="my-6"
        />
      </div>
      {/*=== Apply Filters Button ===*/}
      <Button
        onClick={applyFilters}
        variant="contained"
        className="mt-3 w-[95%] !mx-4 !bg-pink-300"
      >
        Show Results
      </Button>
    </div>
  );
}

export default SidebarFilter;
