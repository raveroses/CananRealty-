"use client";
import { useState } from "react";
import { PiCaretRightThin } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";

const Listing = () => {
  const propertyTypes = useState<string[]>([
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
  console.log(propertyTypes);
  return (
    <section className="bg-[#ffff] shadow md:w-[900px] w-full mx-auto my-20 py-10  md:px-10 px-[10px]">
      <form action="" className="flex flex-col gap-5">
        <div className="flexArea grid md:grid-cols-2 grid-col-1 items-center gap-5">
          <div>
            <p className="text-right text-[13px]">0/60</p>
            <input
              type="text"
              placeholder="Title"
              className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <p className="text-right text-[13px]">0/60</p>

            <input
              type="text"
              placeholder="Address"
              className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            />
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 px-2 border 
            border-gray-400 rounded text-gray-700 "
            >
              <input
                type="text"
                placeholder="Condition"
                className=" w-[300px] border-none outline-none placeholder:text-[14px]"
              />
              <PiCaretRightThin className="font-bold " />
            </div>
            <ul
              className="md:w-[400px] w-[465px] h-[200px] overflow-y-scroll flex flex-col gap-5 shadow absolute top-85 bg-[#ffff]
             z-10 hidden"
            >
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Newly Built
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">Old</li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Off-Plan
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Uncompleted Building
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Under Construction
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Fairly Used
              </li>
            </ul>
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 
            px-2 border border-gray-400 rounded text-gray-700 "
            >
              <input
                type="text"
                placeholder="Furnishing"
                className=" w-[300px] border-none outline-none placeholder:text-[14px]"
              />
              <PiCaretRightThin className="font-bold " />
            </div>
            <ul
              className="md:w-[400px] w-[465px] h-[200px] overflow-y-scroll flex flex-col gap-5 shadow absolute md:top-85 top-127
             bg-[#ffff] z-10 hidden"
            >
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Newly Built
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">Old</li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Off-Plan
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Uncompleted Building
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Under Construction
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Fairly Used
              </li>
            </ul>
          </div>
          <div>
            <div
              className="relative flex justify-between items-center w-full md:py-4 py-3 px-2 border 
            border-gray-400 rounded text-gray-700 "
            >
              <input
                type="text"
                placeholder="Property Type"
                className=" w-[300px] border-none outline-none placeholder:text-[14px]"
              />
              <PiCaretRightThin className="font-bold " />
            </div>
            <ul
              className="md:w-[400px] w-[465px] h-[200px] overflow-y-scroll flex flex-col
             gap-5 shadow absolute md:top-110 top-144 bg-[#ffff] hidden z-10"
            >
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Newly Built
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">Old</li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Off-Plan
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Uncompleted Building
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Under Construction
              </li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">
                Fairly Used
              </li>
            </ul>
          </div>
          <div>
            <input
              type="number"
              name=""
              id=""
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
                className=" w-[300px] border-none outline-none placeholder:text-[14px]"
              />
              <PiCaretRightThin className="font-bold " />
            </div>

            <ul
              className="md:w-[400px] w-[465px] h-[200px] overflow-y-scroll flex flex-col gap-5 shadow absolute
             md:top-130 top-180 bg-[#ffff] hidden"
            >
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">1</li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">2</li>
              <li className="hover:bg-gray-100 py-3 px-2 border-b ">3</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[15px]">Secure Parking</h3>
          <input type="checkbox" name="" id="" />
          <label htmlFor="park"> Yes</label>
          <textarea
            name=""
            id=""
            placeholder="Description"
            className=" w-full h-[130px] md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px] my-6"
          ></textarea>
          <div className="flex gap-5 items-center w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 ">
            <TbCurrencyNaira className="font-bold " />
            <input
              type="number"
              placeholder="Price"
              className=" w-[300px] border-none outline-none placeholder:text-[14px]"
            />
          </div>
          <div className="my-6">
            <h3 className="mt-2">Are you open to negotiation?</h3>
            <div className="flex gap-2">
              <label htmlFor="Yes">Yes</label>
              <input type="radio" name="" id="" />
              <label htmlFor="No">No</label>
              <input type="radio" name="" id="" />

              <label htmlFor="not"> Not sure</label>
              <input type="radio" name="" id="" />
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
