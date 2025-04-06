import { create } from "zustand";
import { IProducts, IProductState } from "./types";

export const useProductsState = create<IProductState>((set, get) => ({
  products: [],
  error: null,
  isLoading: true,
  filters: {},
  productTypes:[],
  colors: [],
  brands: [],
  minPrice: null,
  maxPrice: null,
  filteredList: [],
  getAllProduct: async () => {
    try {
      const response = await fetch("http://localhost:5173/products.json", {
        cache: "no-store",
      });

      const data: IProducts[] = await response.json();

      // === calculating min and max price ===
      const { minPrice, maxPrice } = data.reduce(
        (acc, item) => {
          const price = parseFloat(item.price);
          if (!isNaN(price)) {
            acc.minPrice = Math.min(acc.minPrice, price);
            acc.maxPrice = Math.max(acc.maxPrice, price);
          }
          return acc;
        },
        { minPrice: Infinity, maxPrice: -Infinity }
      );

      //  === get brands ===
      const brands = Array.from(
        new Set(data.map((item) => item.brand).filter(Boolean))
      );
  //  === get product types ===
  const productTypes = Array.from(
    new Set(data.map((item:IProducts)=> item.product_type).filter(Boolean))
  )
  
      // === set states values ===
      set({
        products: data,
        minPrice,
        maxPrice,
        brands,
        productTypes,
        isLoading: false,
      });
    } catch (error) {
      console.error("Fetch error:", error);
      set({ error: "Something went wrong", isLoading: false });
    }
  },
  filterProducts: (filters) => {
    set({ filters });
    const { products } = get();

    let filteredProducts = [...products];

    if (filters.brand) {
      filteredProducts = filteredProducts.filter(
        (item) => item.brand?.toLowerCase() === filters.brand!.toLowerCase()
      );
    }

    if (filters.product_type) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.product_type?.toLowerCase() ===
          filters.product_type!.toLowerCase()
      );
    }
    if(filters.maxPrice !== undefined && filters.maxPrice !== undefined){
      filteredProducts = filteredProducts.filter((item:IProducts)=>{
        parseFloat(item.price) >= filters.minPrice! &&
        parseFloat(item.price) <= filters.maxPrice!
      })
    }

    set({ filteredList: filteredProducts });
  },
}));
