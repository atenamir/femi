export interface IFilterMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }

  export interface IFiltersState{
    brand?: string;
    product_type?: string;
    priceRange?: number[];
  }