"use client";
import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { RefObject } from "react";
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
  createDetail: CreateDetail;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCreateDetailFormSubmission: (e: FormEvent) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: RefObject<HTMLInputElement | null>;
  urls: string[];
  triggerFileSelect: () => void;
  images: File[];
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
        className={`border-1 text-center md:text-[13px] text-[10px] py-1 px-2 rounded cursor-pointer ${
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
        className={`border-1 text-center md:text-[13px] text-[10px]  py-1 px-2 rounded cursor-pointer ${
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

  const handleCardClick = () => {
    router.push("/createListing");
  };

  const [createDetail, setCreateDetail] = useState<CreateDetail>({
    category: "",
    state: "",
    city: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCreateDetail((prev) => {
      const updateDetail = { ...prev, [name]: value };
      localStorage.setItem("create-detail", JSON.stringify(updateDetail));
      return updateDetail;
    });
  };
  const CLOUD_NAME = "diptafc1s";
  const UPLOAD_PRESET = "realestate";

  const ref = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    try {
      const detail = localStorage.getItem("create-detail");
      const urls = localStorage.getItem("uploaded-urls");

      if (detail) {
        setCreateDetail(JSON.parse(detail));
      }
      if (urls) {
        const parsed = JSON.parse(urls);
        if (Array.isArray(parsed)) {
          setUrls(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to load from localStorage", err);
    }
  }, []);

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
    if (handleCreateDetailField() && urls.length > 1) {
      setListingNext((prev) => !prev);
    }
  };

  ///BEGINING OF LISTING IMAGES
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const selectedFiles = Array.from(files);
    setImages(selectedFiles);

    const uploadedUrls: string[] = [];

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

    setUrls((prev) => {
      const updatedUrls = [...prev, ...uploadedUrls];

      try {
        localStorage.setItem("uploaded-urls", JSON.stringify(updatedUrls));
      } catch (err) {
        console.error("Failed to store image URLs:", err);
      }

      return updatedUrls;
    });
  };
  const triggerFileSelect = () => {
    ref.current?.click();
  };

  ////ENDING OF IMAGE
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
        createDetail,
        handleOnChange,
        handleCreateDetailFormSubmission,
        handleFileChange,
        ref,
        urls,
        triggerFileSelect,
        images,
      }}
    >
      {children}
    </ContextInit.Provider>
  );
};

export default ContextKingdom;
