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
import { RefObject } from "react";

export type ContextType = {
  buttonListing: JSX.Element[];
  Rentbutton: JSX.Element[];
  SalesProduct: Property[];
  RentProduct: Property[];
  viewProduct: (id: number, service: string, category: string) => void;
  LandList: Land[];
  viewLandProduct: (id: number, names: string, category: string) => void;
  handleCardClick: () => void;
  landButtonListing: string[];
  landUi: Land[];
  handleLandBtnClicking: (id: string) => void;
  landId: string;
  productName: string;
  handleProductSearchOnchange: (e: ChangeEvent<HTMLInputElement>) => void;
  sellRef: RefObject<HTMLDivElement | null>;
  rentRef: RefObject<HTMLDivElement | null>;
};

export const ContextInit = createContext<ContextType | null>(null);
const ContextKingdom = ({ children }: { children: ReactNode }) => {
  const [saleButton] = useState<string[]>([
    "Home",
    "Apartment",
    "Villa",
    "Office",
    "All",
  ]);

  const [SalesBtnId, setSalesBtnId] = useState<string>("");
  const [RentBtnId, setRentBtnId] = useState<string>("");
  const [SalesProduct, setSalesProduct] = useState<Property[]>(PropertyForsale);
  const originalSellProduct = useRef(SalesProduct);

  const [RentProduct, setRentProduct] = useState<Property[]>(PropertyForRent);
  const originalRentProduct = useRef(RentProduct);

  const handleBtnClicking = (id: string) => {
    const product = PropertyForsale.filter(
      (product) => product.category === id
    );
    setSalesProduct(product);
    setSalesBtnId(id.toLowerCase());
    if (id === "All") {
      setSalesProduct(PropertyForsale);
    }
  };
  const RentPropertyBtn = (id: string) => {
    const product = PropertyForRent.filter(
      (product) => product.category === id
    );
    setRentProduct(product);
    setRentBtnId(id.toLowerCase());
    if (id === "All") {
      setRentProduct(PropertyForRent);
    }
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

  const [landButtonListing] = useState<string[]>([
    "Residential",
    "Commercial",
    "All",
  ]);
  const [landUi, setLandUi] = useState<Land[]>(LandList);
  const [landId, setLandId] = useState("");
  const handleLandBtnClicking = (id: string) => {
    const landFilter = LandList.filter((land) => land.category === id);
    setLandUi(landFilter);
    if (id === "All") {
      setLandUi(LandList);
    }
    setLandId(id);
  };

  const router = useRouter();
  const viewProduct = (id: number, service: string, category: string) => {
    router.push(`/property/${id}?service=${service}&category=${category}`);
  };

  const viewLandProduct = (id: number, names: string, category: string) => {
    router.push(`/land/${id}?name=${names}&category=${category}`);
  };

  const handleCardClick = () => {
    router.push("/createListing");
  };

  ////ENDING OF IMAGE

  // BEGINIG OF PRODUCT SEARCH
  const [productName, setProductName] = useState("");
  const handleProductSearchOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(() => e.target.value.trim());
  };
  const sellRef = useRef<HTMLDivElement>(null);
  const rentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userSearchInput = productName.toLowerCase();

    if (userSearchInput === "") {
      setSalesProduct(originalSellProduct.current);
      setRentProduct(originalRentProduct.current);
      return;
    }
    const propertyBuy = originalSellProduct.current.filter((house) => {
      const propertyElement = house.heading
        .trim()
        .toLowerCase()
        .includes(userSearchInput);
      return propertyElement;
    });

    const propertyRent = originalRentProduct.current.filter((house) => {
      const propertyElement = house.heading
        .trim()
        .toLowerCase()
        .includes(userSearchInput);
      return propertyElement;
    });

    if (propertyBuy.length > 0) {
      setSalesProduct(propertyBuy);
    } else {
      setSalesProduct(PropertyForsale);
    }

    if (propertyRent.length > 0) {
      setRentProduct(propertyRent);
    } else {
      setRentProduct(PropertyForRent);
    }

    console.log("rent", propertyRent);
  }, [productName]);

  useEffect(() => {
    if (SalesProduct.length > 0) {
      if (sellRef.current !== null) {
        sellRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [SalesProduct]);

  useEffect(() => {
    if (RentProduct.length > 0) {
      if (rentRef.current !== null) {
        rentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [RentProduct]);
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
        landButtonListing,
        landUi,
        handleLandBtnClicking,
        landId,
        productName,
        handleProductSearchOnchange,
        sellRef,
        rentRef,
      }}
    >
      {children}
    </ContextInit.Provider>
  );
};

export default ContextKingdom;
