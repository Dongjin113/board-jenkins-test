import { atom } from "recoil";

export const isOpenState = atom({
  key: "isOpenState",
  default: Array(5).fill(false), 
});


export const campingData = atom({
  key: "campingData",
  default: [], 
});


export const detailMapIsOpen = atom({
  key: "detailIsOpenState",
  default: Array(5).fill(false), 
});