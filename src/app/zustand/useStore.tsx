"use client";
import { ChangeEvent } from "react";
import { create } from "zustand";

type inputTypes = {
  title: string;
  address: string;
  conditionValue: string;
  propertyType: string;
  furnishingValue: string;
  squareMetre: number;
  parkingSpace: number;
  secureParking: boolean;
  description: string;
  price: number;
  negotiation: string;
  name: string;
  email: string;
  yes: boolean;
  no: boolean;
  notsure: boolean;
  handleUserValueClickRetrieval: (type: string, id: string | number) => void;
  handleInputOnchange: (type: string) => void;
  handleInputOnchange2: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckBox: (selected: string) => void;
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
  title: "",
  address: "",
  conditionValue: "",
  propertyType: "",
  furnishingValue: "",
  squareMetre: 0,
  parkingSpace: 0,
  secureParking: false,
  description: "",
  price: 0,
  negotiation: "",
  name: "",
  email: "",
  yes: false,
  no: false,
  notsure: false,
  // END OF USER CLICK
  handleFocus: (type: string) => {
    set((state) => {
      const open = { ...state, [`${type}Open`]: true };
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
  handleInputOnchange2: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    set((state) => ({ ...state, [name]: value }));
  },
  handleCheckBox: (selected: string) => {
    set(() => ({
      yes: selected === "yes",
      no: selected === "no",
      notsure: selected === "notsure",
    }));
  },
}));

export default useStore;
