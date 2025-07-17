"use client";
import { GiFamilyHouse, GiIsland, GiPriceTag } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";
import useContextRetrieval from "@/app/context/useContextRetrieval";

const CreateCard = () => {
  const { handleCardClick } = useContextRetrieval();
  return (
    <section className="w-full h-full flex md:flex-row flex-col  items-center justify-between mt-20">
      <div className="flex flex-col gap-5 sidebar md:w-[30%] w-full h-[500px] bg-[#ffffff] shadow px-5 py-10">
        <h3 className="text-[20px] font-bold">Create new Listing</h3>
        <div className="flex items-center text-[14px] font-semibold">
          <span className="bg-[#1266e3] text-[20px] text-white rounded-full p-2 mr-5">
            <IoPricetagsOutline />
          </span>
          Choose Listing Type
        </div>

        <div className="count flex items-center justify-between">
          <div className="flex items-center justify-between text-[14px] font-semibold">
            <span className="bg-[#1266e3] text-[20px] text-white rounded-full p-2 mr-5">
              <GiPriceTag />
            </span>
            Your Listings
          </div>
          <div className="activeListing text-[13px]">20+ active</div>
        </div>
      </div>
      <div className="realcards md:w-[60%] w-full mt-10 md:mt-0">
        <h2 className="text-[20px] font-bold pb-5 md:text-left text-center">
          Choose Listing Type
        </h2>
        <div className="cardFlex flex md:flex-row flex-col gap-10 items-center">
          <div
            className="bg-[#ffffff] w-[250px] h-[200px] shadow text-center p-3 rounded-xl"
            onClick={handleCardClick}
          >
            <div className="text-[35px] rounded-full inline-block bg-[#1266e3] text-white p-3 mx-auto ">
              <GiFamilyHouse />
            </div>
            <h3 className="text-[13px] font-bold ">House for sale or Rent</h3>
            <p className="text-[15px]">
              List a house or apartment for sale or rent
            </p>
          </div>
          <div
            className="bg-[#ffffff] w-[250px] h-[200px] shadow text-center p-3 rounded-xl"
            onClick={handleCardClick}
          >
            <div className="text-[35px] rounded-full inline-block bg-[#1266e3] text-white p-3 mx-auto ">
              <GiIsland />
            </div>
            <h3 className="text-[13px] font-bold ">Land for sale or Rent</h3>

            <p className="text-[15px]"> List a Land for sale or rent</p>
          </div>
          <div
            className="bg-[#ffffff] w-[250px] h-[200px] shadow text-center p-3 rounded-xl"
            onClick={handleCardClick}
          >
            <div className="text-[35px] rounded-full inline-block bg-[#1266e3] text-white p-3 mx-auto ">
              <PiBuildingApartment />
            </div>
            <h3 className="text-[13px] font-bold ">Booking Apartment</h3>

            <p className="text-[15px]">
              List a house or apartment for available for booking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCard;
