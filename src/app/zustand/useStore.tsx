"use client";
import { create } from "zustand";

type inputTypes = {
  address: string;
  conditionValue: string;
  propertyType: string;
  furnishingValue: string;
  squareMetre: number;
  parkingSpace: number;
  description: string;
  price: number;
  negotiation: string;
  name: string;
  email: string;
  handleUserValueClickRetrieval: (type: string, id: string | number) => void;
  handleInputOnchange: (type: string) => void;
};
type handleFunc = {
  ConditionOpen: boolean;
  FurnishingOpen: boolean;
  PropertyTypeOpen: boolean;
  ParkingOpen: boolean;
  handleBlur: (type: string) => void;
  handleFocus: (type: string) => void;
};

type FullType = inputTypes & handleFunc;

const useStore = create<FullType>((set) => ({
  ConditionOpen: false,
  FurnishingOpen: false,
  PropertyTypeOpen: false,
  ParkingOpen: false,
  // BEGINIG OF USER CLICK
  address: "",
  conditionValue: "",
  propertyType: "",
  furnishingValue: "",
  squareMetre: 0,
  parkingSpace: 0,
  description: "",
  price: 0,
  negotiation: "",
  name: "",
  email: "",
  // END OF USER CLICK
  handleFocus: (type: string) => {
    set((state) => {
      const open = { ...state, [`${type}Open`]: true };
      console.log(open);
      return open;
    });
  },
  handleBlur: (type: string) => {
    setTimeout(() => {
      set((state) => ({ ...state, [`${type}Open`]: false }));
    }, 3000);
  },

  handleUserValueClickRetrieval: (type: string, id: string | number) => {
    set((state) => ({ ...state, [type]: id }));
  },
  handleInputOnchange: (type: string) => {
    set((state) => ({ [type]: state[type as keyof FullType] }));
  },
}));

export default useStore;
