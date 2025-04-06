export interface IProducts {
    id: number 
    brand: string
    name: string
    price: string
    price_sign: string
    currency: string
    image_link: string
    product_link: string
    website_link: string
    description: string
    rating: any
    category: string
    product_type: string
    tag_list: string[]
    created_at: string
    updated_at: string
    product_api_url: string
    api_featured_image: string
    product_colors: Icolor[]
  }
  

 export interface IFilters {
    product_type?: string;
    brand?: string;
    minPrice?:number ;
    maxPrice?:number ;
  }
  
  export interface Icolor {
    hex_value: string;
    colour_name: string;
  }
  
  export interface IProductState {
    products: IProducts[];
    isLoading: boolean;
    filters: IFilters;
    productTypes: string[]
    brands: string[];
    minPrice: number | null;
    maxPrice: number | null;
    filteredList: IProducts[];
    error: string | null;
    getAllProduct: () => Promise<void>;
    filterProducts: (filters: IFilters) => void;
  }