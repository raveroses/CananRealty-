"use client";
import useContextRetrieval from "@/app/context/useContextRetrieval";
import useStore from "@/app/zustand/useStore";
import { useState } from "react";
import { PiCaretRightThin } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";

const Listing = () => {
  const { isListingNext } = useContextRetrieval();

  const [propertyTypes] = useState<string[]>([
    "Hotel",
    "Office spaces",
    "Shop",
    "Terraced Duplex",
    "Warehouse",
    "Business center",
    "Office",
    "Church",
    "Filling Station",
    "Fish farm",
    "Garage",
    "Gasplant",
    "Hall",
    "Factory",
    "Hospital",
    "Hostel",
    "Laundry Business",
    "Open space",
    "Pharmacy",
    "Poultry farm",
    "Plaza",
    "Recreational center",
    "Restaurant",
    "School",
    "Salons",
    "Show room",
    "Supermarket",
    "Tank farm",
  ]);
  const [condition] = useState<string[]>([
    "Newly Built",
    "Old",
    "  Off-Plan",
    " Uncompleted Building",
    " Under Construction",
    "   Fairly Used",
  ]);
  const [furnishing] = useState<string[]>([
    "Newly Built",
    "Old",
    "  Off-Plan",
    " Uncompleted Building",
    " Under Construction",
    "   Fairly Used",
  ]);
  const [parking] = useState<number[]>([1, 2, 3, 4, 5]);

  const {
    ConditionOpen,
    FurnishingOpen,
    PropertyTypeOpen,
    ParkingOpen,
    handleFocus,
    handleBlur,
    handleUserValueClickRetrieval,
    conditionValue,
    propertyType,
    furnishingValue,
    parkingSpace,
    handleInputOnchange,
    handleInputOnchange2,
    title,
    address,
    squareMetre,
    secureParking,
    description,
    handleCheckBox,
    price,
    yes,
    no,
    notsure,
  } = useStore();
  console.log("Yes", yes, "No", no, "Notsure", notsure);

  const propertyTypeMap = propertyTypes.map((property, index) => {
    return (
      <li
        className="hover:bg-gray-100 py-3 px-2 border-b cursor-pointer"
        key={index}
        onClick={() => handleUserValueClickRetrieval("propertyType", property)}
      >
        {property}
      </li>
    );
  });
  const furnishingTypeMap = furnishing.map((furnishing, index) => {
    return (
      <li
        className="hover:bg-gray-100 py-3 px-2 border-b  cursor-pointer"
        key={index}
        onClick={() =>
          handleUserValueClickRetrieval("furnishingValue", furnishing)
        }
      >
        {furnishing}
      </li>
    );
  });
  const conditionTypeMap = condition.map((condition) => {
    return (
      <li
        className="hover:bg-gray-100 py-3 px-2 border-b cursor-pointer"
        key={condition}
        onClick={() =>
          handleUserValueClickRetrieval("conditionValue", condition)
        }
      >
        {condition}
      </li>
    );
  });

  const parkingTypeMap = parking.map((park, index) => {
    return (
      <li
        className="hover:bg-gray-100 py-3 px-2 border-b cursor-pointer"
        key={index}
        onClick={() => handleUserValueClickRetrieval("parkingSpace", park)}
      >
        {park}
      </li>
    );
  });

  return (
    <section
      className={`bg-[#ffff] shadow md:w-[900px] mx-auto my-20 py-10 md:px-10 px-[10px] ${
        isListingNext ? "block" : "hidden"
      }`}
    >
      <form
        className="flex flex-col gap-5 w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flexArea grid md:grid-cols-2 grid-col-1 items-center gap-5  w-full">
          <div>
            <p className="text-right text-[13px]">0/60</p>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={handleInputOnchange2}
              className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p className="text-right text-[13px]">0/60</p>

            <input
              type="text"
              value={address}
              name="address"
              placeholder="Address"
              onChange={handleInputOnchange2}
              className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 px-2 border 
            border-gray-400 rounded text-gray-700"
            >
              <input
                type="text"
                value={conditionValue}
                onChange={() => handleInputOnchange("conditionValue")}
                placeholder="condition"
                className="  w-full border-none outline-none placeholder:text-[14px]"
                onFocus={() => handleFocus("Condition")}
                onBlur={() => handleBlur("Condition")}
              />
              <PiCaretRightThin className="font-bold " />
            </div>
            {ConditionOpen && (
              <ul
                className="md:w-[400px] w-[300px] h-[200px] overflow-y-scroll flex flex-col gap-5 shadow absolute 
                md:top-100 top-98 bg-[#ffff]
             z-10 "
              >
                {conditionTypeMap}
              </ul>
            )}
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 
            px-2 border border-gray-400 rounded text-gray-700 "
            >
              <input
                type="text"
                placeholder="Furnishing"
                value={furnishingValue}
                className="  w-full border-none outline-none placeholder:text-[14px]"
                onFocus={() => handleFocus("Furnishing")}
                onBlur={() => handleBlur("Furnishing")}
                onChange={() => handleInputOnchange("furnishingValue")}
              />
              <PiCaretRightThin className="font-bold " />
            </div>
            {FurnishingOpen && (
              <ul
                className="md:w-[400px] w-[300px] h-[200px] overflow-y-scroll flex flex-col gap-5 shadow absolute 
                md:top-101 top-[460px]
             bg-[#ffff] z-10 "
              >
                {furnishingTypeMap}
              </ul>
            )}
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 px-2 border 
            border-gray-400 rounded text-gray-700 "
            >
              <input
                type="text"
                placeholder="Property Type"
                value={propertyType}
                className="  w-full border-none outline-none placeholder:text-[14px]"
                onFocus={() => handleFocus("PropertyType")}
                onBlur={() => handleBlur("PropertyType")}
                onChange={() => handleInputOnchange("propertyType")}
              />
              <PiCaretRightThin className="font-bold " />
            </div>
            {PropertyTypeOpen && (
              <ul
                className="md:w-[400px] w-[300px] h-[200px] overflow-y-scroll flex flex-col
             gap-5 shadow absolute md:top-120 top-[530px] bg-[#ffff] z-10"
              >
                {propertyTypeMap}
              </ul>
            )}
          </div>
          <div>
            <input
              type="number"
              name="squareMetre"
              value={squareMetre}
              placeholder="Square Metres(sqm)"
              className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 px-2 border border-gray-400 rounded 
            text-gray-700 "
            >
              <input
                type="number"
                placeholder="Parking Spaces"
                value={parkingSpace}
                className=" w-full border-none outline-none placeholder:text-[14px]"
                onFocus={() => handleFocus("Parking")}
                onBlur={() => handleBlur("Parking")}
                onChange={() => handleInputOnchange("parkingSpace")}
              />
              <PiCaretRightThin className="font-bold " />
            </div>

            {ParkingOpen && (
              <ul
                className="md:w-[400px] w-[300px] h-[200px] overflow-y-scroll flex flex-col gap-5 shadow absolute
             md:top-140 top-[670px] bg-[#ffff] "
              >
                {parkingTypeMap}
              </ul>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[15px]">Secure Parking</h3>
          <input
            type="checkbox"
            name="secureParking"
            checked={secureParking}
            onChange={() => handleCheckBox("secureParking")}
          />
          <label htmlFor="park"> Yes</label>
          <textarea
            name="description"
            value={description}
            onChange={handleInputOnchange2}
            placeholder="Description"
            className=" w-full h-[130px] md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px] my-6"
          ></textarea>
          <div className="flex gap-5 items-center w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 ">
            <TbCurrencyNaira className="font-bold " />
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleInputOnchange2}
              placeholder="Price"
              className=" w-full border-none outline-none placeholder:text-[14px]"
            />
          </div>
          <div className="my-6">
            <h3 className="mt-2">Are you open to negotiation?</h3>
            <div className="flex gap-2">
              <label htmlFor="Yes">Yes</label>
              <input
                type="radio"
                name="selected"
                checked={yes}
                onChange={() => handleCheckBox("yes")}
              />
              <label htmlFor="No">No</label>
              <input
                type="radio"
                name="selected"
                checked={no}
                onChange={() => handleCheckBox("no")}
              />

              <label htmlFor="not"> Not sure</label>
              <input
                type="radio"
                name="selected"
                checked={notsure}
                onChange={() => handleCheckBox("notsure")}
              />
            </div>
          </div>
          <div className="flex md:gap-5 gap-2 ">
            <input
              type="text"
              placeholder="Name "
              className=" w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
            <input
              type="email"
              placeholder="Email "
              className=" w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#1266e3] text-white font-bold md:w-[500px] w-full py-2 text-[14px] rounded mx-auto"
        >
          Post Ads
        </button>
      </form>
    </section>
  );
};

export default Listing;
