"use client";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useContextRetrieval from "@/app/context/useContextRetrieval";
const ListFrontPage = () => {
  const { isListingNext, handleNext } = useContextRetrieval();

  return (
    <div className={`md:px-20 px-[10px] ${isListingNext ? "hidden" : "block"}`}>
      <section className="bg-[#ffff] shadow md:w-[800px] w-full mx-auto mt-20 py-10 md:px-45 px-10 ">
        <form action="" className="flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="Category"
            className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
          />
          <input
            type="text"
            placeholder="Enter State "
            className=" w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
          />
          <input
            type="text"
            placeholder="Enter City"
            className=" w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
          />

          <div className="images">
            <h3 className="text-[15px] font-semibold">Add photo</h3>
            <div className="imageCard flex gap-2 ">
              <div className="bg-blue-100 w-[100px] h-[100px] rounded-xl py-8">
                <GoPlus className="mx-auto text-[25px] font-bold " />
              </div>

              <div className="w-[300px] flex gap-2 overflow-x-auto">
                <Image
                  src="/images/house2.jpg"
                  alt="image-card"
                  width={100}
                  height={200}
                  className="rounded-xl"
                />
                <Image
                  src="/images/house2.jpg"
                  alt="image-card"
                  width={100}
                  height={200}
                  className="rounded-xl"
                />
                <Image
                  src="/images/house2.jpg"
                  alt="image-card"
                  width={100}
                  height={200}
                  className="rounded-xl"
                />
                <Image
                  src="/images/house2.jpg"
                  alt="image-card"
                  width={100}
                  height={200}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </form>
        <Button
          // variant="outline"
          className="bg-[#1266e3] w-full mt-10 text-white font-semibold cursor-pointer hover:bg-blue-300
             hover:text-[#1266e3] transition all-ease duration-2000"
          onClick={handleNext}
        >
          Next
        </Button>
      </section>
    </div>
  );
};

export default ListFrontPage;
