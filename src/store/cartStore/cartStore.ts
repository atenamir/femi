import { create } from "zustand";
import { ICartItem, ICartStore } from "./types";

// === create new key for cart if user logged in ===
export const cartStorageKey = () => {
  const user_id = localStorage.getItem("userId");
  return user_id ? `cart_user${user_id}` : null;
};
// === function for add products to local storage cart ====
export const saveCartToLocalStorage = (items: ICartItem[]) => {
  const key = cartStorageKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(items));
};
// === function for getting cart items from local storage ===
export const getCartFromLocalStorage = (): ICartItem[] => {
  const key = cartStorageKey();
  if (!key) return [];
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : [];
};

export const useCartStore = create<ICartStore>((set) => ({
  items: getCartFromLocalStorage(),

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.color === item.color
      );
      let newItems;
      if (existingItem) {
        newItems = state.items.map((i) =>
          i.id === item.id && i.color === item.color
            ? { ...i, qty: i.qty + item.qty }
            : i
        );
      } else {
        newItems = [...state.items, item];
      }
      saveCartToLocalStorage(newItems);
      return { items: newItems };
    }),

  removeFromCart: (id, color) =>
    set((state) => {
      const newItems = state.items.filter(
        (i) => i.id !== id || i.color !== color
      );
      saveCartToLocalStorage(newItems);
      return { items: newItems };
    }),
    
  increaseQty:(id , color)=> set((state) => {
    const newItems = state.items.map((item) =>
   item.color === color && id === item.id ?
    {...item , qty:item.qty +1} : item
    );
    saveCartToLocalStorage(newItems)
    return {items:newItems}
  }),
  decreaseQty:(id , color)=>  set((state) => {
    const newItems = state.items.map((item) =>
      item.id === id && item.color === color
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item
    );
    saveCartToLocalStorage(newItems);
    return { items: newItems };
  }),
  totalPrice: () => set((state) => {
    const total = state.items.reduce((acc: number, item: ICartItem) => {
      return acc + (item.price * item.qty);
    }, 0);
  
    return { ...state, total }; 
  }),
  
}));
