export interface ICartStore {
  items: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number, color: string) => void;
  increaseQty:(id:number , color:string)=>void
  decreaseQty:(id:number , color:string)=>void
  totalPrice:()=>void
}

export interface ICartItem {
  id:number;
  name: string;
  color: string ;
  price: number;
  image: string;
  qty: number;
  discount?: number;
}
