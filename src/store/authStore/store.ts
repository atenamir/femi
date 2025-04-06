import { create } from "zustand";
import { IStore } from "./type"

//  === Zustand store for managing authentication tokens ====
export const useStore = create<IStore>((set) => ({
  // === Stores  access_token  and  refresh_token ===
  access_token: null,
  refresh_token: null,
//    === action for setting tokens ===
  setState: (data) =>
    set({
      access_token: data?.access_token,
      refresh_token: data?.refresh_token
    }),
   //  === action for cleanning tokens ===
  removeState : () =>
    set({
      access_token: null,
      refresh_token: null,
    })
}));

export default useStore;
