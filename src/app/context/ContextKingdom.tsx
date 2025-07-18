"use client";
import { createContext, ReactNode, useState } from "react";
import { PropertyForsale } from "../data/PropertyListing";
import { PropertyForRent } from "../data/PropertyListing";
import { LandList } from "../data/PropertyListing";
import { Land } from "../data/PropertyListing";
import { useRouter } from "next/navigation";
import { JSX } from "react/jsx-runtime";
import { Property } from "../data/PropertyListing";
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
      }}
    >
      {children}
    </ContextInit.Provider>
  );
};

export default ContextKingdom;
