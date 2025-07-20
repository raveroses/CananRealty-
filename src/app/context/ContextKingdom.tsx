"use client";
import { ChangeEvent, createContext, ReactNode, useState } from "react";
import { PropertyForsale } from "../data/PropertyListing";
import { PropertyForRent } from "../data/PropertyListing";
import { LandList } from "../data/PropertyListing";
import { Land } from "../data/PropertyListing";
import { useRouter } from "next/navigation";
import { JSX } from "react/jsx-runtime";
import { Property } from "../data/PropertyListing";
import { FormEvent } from "@formspree/react";
import { toast } from "react-toastify";
import axios from "axios";
type ContextType = {
  buttonListing: JSX.Element[];
  Rentbutton: JSX.Element[];
  SalesProduct: Property[];
  RentProduct: Property[];
  viewProduct: (id: number, service: string, category: string) => void;
  LandList: Land[];
  viewLandProduct: (id: number, names: string, category: string) => void;
  handleCardClick: () => void;
  isListingNext: boolean;
  handleNext: () => void;
  createDetail: CreateDetail;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCreateDetailFormSubmission: (e: FormEvent) => void;
};

type CreateDetail = {
  category: string;
  state: string;
  city: string;
};

export const ContextInit = createContext<ContextType | null>(null);
const ContextKingdom = ({ children }: { children: ReactNode }) => {
  const [saleButton] = useState<string[]>([
    "Home",
    "Apartment",
    "Villa",
    "Office",
  ]);

  const [SalesBtnId, setSalesBtnId] = useState<string>("");
  const [RentBtnId, setRentBtnId] = useState<string>("");
  const [SalesProduct, setSalesProduct] = useState(PropertyForsale);
  const [RentProduct, setRentProduct] = useState(PropertyForRent);
  const handleBtnClicking = (id: string) => {
    const product = PropertyForsale.filter(
      (product) => product.category === id
    );
    setSalesProduct(product);
    setSalesBtnId(id.toLowerCase());
  };
  const RentPropertyBtn = (id: string) => {
    const product = PropertyForRent.filter(
      (product) => product.category === id
    );
    setRentProduct(product);
    setRentBtnId(id.toLowerCase());
  };
  const buttonListing: JSX.Element[] = saleButton.map((button, index) => {
    return (
      <div
        className={`border-1 text-center md:text-[13px] text-[12px]  py-1 px-2 rounded cursor-pointer ${
          SalesBtnId === button.toLowerCase() && "bg-black text-white"
        }`}
        key={index}
        onClick={() => handleBtnClicking(button)}
      >
        {button}
      </div>
    );
  });
  const Rentbutton: JSX.Element[] = saleButton.map((button, index) => {
    return (
      <div
        className={`border-1 text-center md:text-[13px] text-[12px]  py-1 px-2 rounded cursor-pointer ${
          RentBtnId === button.toLowerCase() && "bg-black text-white"
        }`}
        key={index}
        onClick={() => RentPropertyBtn(button)}
      >
        {button}
      </div>
    );
  });

  const router = useRouter();
  const viewProduct = (id: number, service: string, category: string) => {
    router.push(`/property/${id}?service=${service}&category=${category}`);
  };

  const viewLandProduct = (id: number, names: string, category: string) => {
    router.push(`/land/${id}?name=${names}&category=${category}`);
  };

  const [isListingNext, setListingNext] = useState<boolean>(false);

  const handleNext = () => {
    setListingNext((prev) => !prev);
  };
  const handleCardClick = () => {
    router.push("/createListing");
  };

  const [createDetail, setCreateDetail] = useState<CreateDetail>(() => {
    try {
      const stores = localStorage.getItem("store");

      return stores
        ? JSON.parse(stores)
        : {
            category: "",
            state: "",
            city: "",
          };
    } catch (err: unknown) {
      console.log("Error parsing localStorage:", err);
      return {
        category: "",
        state: "",
        city: "",
      };
    }
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCreateDetail((prev) => {
      const updateDetail = { ...prev, [name]: value };
      localStorage.setItem("store", JSON.stringify(updateDetail));
      return updateDetail;
    });
  };

  const handleCreateDetailField = (): boolean => {
    let validation: boolean = false;
    if (!createDetail.category || !createDetail.city || !createDetail.state) {
      toast.error("Please fill all required fields");
      validation = false;
      return validation;
    }

    return (validation = true);
  };

  const handleCreateDetailFormSubmission = (e: FormEvent) => {
    e.preventDefault();
    // console.log("clicked me");
    if (handleCreateDetailField()) {
      console.log(true);
    }
    toast.success("success");
  };

  const CLOUD_NAME = "diptafc1s";
  const UPLOAD_PRESET = "realestate";

  const [images, setImages] = useState<File[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };
  const uploadImages = async () => {
    setLoading(true);
    const uploadedUrls: string[] = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
          formData
        );
        uploadedUrls.push(res.data.secure_url);
      } catch (err: unknown) {
        console.log("Erroe Occur", err);
        console.error("Upload failed for", image.name);
      }
    }

    setUrls(uploadedUrls);
    setLoading(false);
  };

  return (
    <ContextInit.Provider
      value={{
        buttonListing,
        Rentbutton,
        SalesProduct,
        RentProduct,
        viewProduct,
        LandList,
        viewLandProduct,
        handleCardClick,
        isListingNext,
        handleNext,
        createDetail,
        handleOnChange,
        handleCreateDetailFormSubmission,
      }}
    >
      {children}
    </ContextInit.Provider>
  );
};

export default ContextKingdom;
