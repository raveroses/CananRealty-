import { create } from "zustand";

type handleFunc = {
  ConditionOpen: boolean;
  FurnishingOpen: boolean;
  PropertyTypeOpen: boolean;
  ParkingOpen: boolean;
  handleBlur: (type: string) => void;
  handleFocus: (type: string) => void;
};

const usePersonStore = create<handleFunc>((set) => ({
  ConditionOpen: false,
  FurnishingOpen: false,
  PropertyTypeOpen: false,
  ParkingOpen: false,
  handleFocus: (type: string) => {
    console.log(type);
    set((state) => {
      const open = { ...state, [`${type}Open`]: true };
      console.log(open);
      return open;
    });
  },
  handleBlur: (type: string) =>
    set((state) => ({ ...state, [`${type}Open`]: false })),
}));

export default usePersonStore;
