"use client";
import { ChangeEvent, FormEvent } from "react";
import { create } from "zustand";
import { toast } from "react-toastify";
import axios from "axios";
type inputTypes = {
  title: string;
  address: string;
  conditionValue: string;
  propertyType: string;
  furnishingValue: string;
  squareMetre: number | string;
  parkingSpace: number | string;
  secureParking: boolean;
  description: string;
  price: number | string;
  negotiation: string;
  name: string;
  email: string;
  selected: string;
  handleUserValueClickRetrieval: (type: string, id: string | number) => void;
  handleInputOnchange: (type: string) => void;
  handleInputOnchange2: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckBox: (selected?: string) => void;
  handleCheckBox2: (e: ChangeEvent<HTMLInputElement>) => void;
  objectListing: Partial<FullType>[];
  setListing: (data: Partial<FullType>) => void;
  category: string;
  state: string;
  city: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCreateDetailFormSubmission: (e: FormEvent) => void;
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateDetailField: () => boolean;
  urls: string[];
  isListingNext: boolean;
  images: File[];
  UPLOAD_PRESET: string;
  CLOUD_NAME: string;
};
type handleFunc = {
  ConditionOpen: boolean;
  FurnishingOpen: boolean;
  PropertyTypeOpen: boolean;
  ParkingOpen: boolean;
  handleBlur: (type: string) => void;
  handleFocus: (type: string) => void;
};

export type FullType = inputTypes & handleFunc;
// type CreateDetail = {
//   category: string;
//   state: string;
//   city: string;
// };
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
  squareMetre: "",
  parkingSpace: "",
  secureParking: false,
  description: "",
  price: "",
  negotiation: "",
  name: "",
  email: "",
  selected: "",
  objectListing: [],

  // END OF USER CLICK
  // beginig of listfontpage
  category: "",
  state: "",
  city: "",

  // cloudinary

  UPLOAD_PRESET: "realestate",
  CLOUD_NAME: "diptafc1s",
  images: [],
  urls: [],
  isListingNext: false,
  handleFocus: (type: string) => {
    set((state) => {
      const open = { ...state, [`${type}Open`]: true };
      return open;
    });
  },
  handleBlur: (type: string) => {
    setTimeout(() => {
      set((state) => ({ ...state, [`${type}Open`]: false }));
    }, 2000);
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
  handleCheckBox: (select?: string) => {
    set(() => ({ selected: select }));
  },
  handleCheckBox2: (e: ChangeEvent<HTMLInputElement>) => {
    set(() => ({ secureParking: e.target.checked }));
  },

  setListing: (data) =>
    set((state) => ({
      objectListing: [
        {
          ...state.objectListing,
          ...data,
        },
      ],
    })),
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    set((state) => {
      const updateDetail = { ...state, [name]: value };
      localStorage.setItem("create-detail", JSON.stringify(updateDetail));
      return updateDetail;
    });
  },

  handleCreateDetailField: (): boolean => {
    const { category, city, state } = useStore.getState();
    if (!category || !city || !state) {
      toast.error("Please fill all required fields");
      return false;
    }
    return true;
  },

  handleCreateDetailFormSubmission: (e: FormEvent) => {
    e.preventDefault();
    const state = useStore.getState();

    if (state.handleCreateDetailField() && state.urls.length > 1) {
      set(() => ({ isListingNext: !state.isListingNext }));
    }
  },

  ///BEGINING OF LISTING IMAGES
  handleFileChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selectedFiles = Array.from(files);
    const uploadedUrls: string[] = [];

    const { CLOUD_NAME, UPLOAD_PRESET } = useStore.getState();

    for (const image of selectedFiles) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
          formData
        );
        uploadedUrls.push(res.data.secure_url);
      } catch (err) {
        console.error("Upload failed for", image?.name, err);
      }
    }

    const prevUrls = useStore.getState().urls;
    const updatedUrls = [...prevUrls, ...uploadedUrls];

    try {
      localStorage.setItem("uploaded-urls", JSON.stringify(updatedUrls));
    } catch (err) {
      console.error("Failed to store image URLs:", err);
    }

    set(() => ({
      urls: updatedUrls,
      images: selectedFiles,
    }));
  },
}));

export default useStore;
