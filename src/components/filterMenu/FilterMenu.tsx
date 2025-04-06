import { RiCloseLargeLine } from "react-icons/ri";
import {  motion } from "framer-motion";
import { useProductsState } from "../../store/products/productStore";
import { useState } from "react";
import { IFilterMenuProps } from "./types";
import { Slider, Button, ToggleButton, ToggleButtonGroup, TextField, Autocomplete } from "@mui/material";
function FilterMenu({ isOpen, setIsOpen }: IFilterMenuProps) {

  const { brands, minPrice, maxPrice, filterProducts , productTypes} = useProductsState();

  const [filters, setFilters] = useState<{
    brand: string;
    product_type: string;
    priceRange: number[];
  }>({
    brand: "",
    product_type: "",
    priceRange: [minPrice ?? 0, maxPrice ?? 1000], //=== Handling `null` values===
  });

  // === Handle product type selection ===
  const handleFilterChange = (type: "brand" | "product_type", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value, // Toggle selection
    }));
  };

  // ==== Handle price range change ===
  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: newValue as number[],
    }));
  };

  //=== Apply filters ===
  const applyFilters = () => {
    filterProducts(filters);
    setIsOpen(false)
  };
  // ==== define animation ====
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 }, 
    visible: { x: "0%", opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }, 
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };
  return (
    <motion.div
      className="bg-white shadow-2xl h-screen w-full fixed top-0 right-0 z-10 lg:hidden"
      variants={menuVariants} 
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
    >
    
      <motion.button
        title="close"
        className="mx-3 my-5 text-2xl cursor-pointer"
        whileTap={{ scale: 0.7 }}
        onClick={() => setIsOpen(false)}
      >
        <RiCloseLargeLine />
      </motion.button>

        {/* === filtering items === */}
        <section className="w-[80%] mx-auto">
        <div className="p-4 bg-white">
      {/*=== Price Filter ===*/}
      <h3 className="font-semibold">Price :</h3>
      <Slider
        value={filters.priceRange}
        onChange={handlePriceChange}
        min={minPrice ?? 0}
        max={maxPrice ?? 1000}
        step={10}
        valueLabelDisplay="auto"
        className="!text-pink-300"
      />
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>${filters.priceRange[0]}</span>
        <span>${filters.priceRange[1]}</span>
      </div>

      {/* ====Product Type Filter ====*/}
      <h3 className="font-semibold mt-4 my-3 border-t pt-3 border-gray-200">Product Type:</h3>
      <ToggleButtonGroup
        value={filters.product_type}
        exclusive
        onChange={(_, newVal) => handleFilterChange("product_type", newVal)}
        aria-label="product type"
        className="!grid !grid-cols-2 gap-1 sm:!grid-cols-3 md:!grid-cols-4" 
      >
        {productTypes.map((type) => (
          <ToggleButton key={type} value={type} className="border rounded-lg px-3 ">
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/*=== Brand Filter with Search ===*/}
      <h3 className="font-semibold mt-5 border-t border-gray-200 pt-2">Brand :</h3>
      <Autocomplete
        freeSolo
        options={brands.slice(0, 5)} // Show only first 3 brands as suggestions
        value={filters.brand}
        onInputChange={(_, newVal) => handleFilterChange("brand", newVal)}
        renderInput={(params) => <TextField {...params} placeholder="Search brand..." variant="outlined" />}
      className="my-6 "
      />

      {/*=== Apply Filters Button ===*/}
      <Button onClick={applyFilters} variant="contained" 
      className="mt-3 w-full !bg-pink-300">
        Show Results
      </Button>
    </div>
        </section>
    </motion.div>
  );
}

export default FilterMenu;
