"use client";
import { FaRegHeart } from "react-icons/fa";
import useContextRetrieval from "@/app/context/useContextRetrieval";
const LandBody = () => {
  const { buttonListing, LandList, viewLandProduct } = useContextRetrieval();

  return (
    <>
      <section className="md:px-20 px-[10px]  my-20">
        <div className="flex items-center justify-between">
          <div className="heads">
            <h1 className="md:text-[30px] text-[25px] font-bold">
              Residential
            </h1>
            <p className="text-[15px]">25 Residential Land Found </p>
          </div>

          <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
            {buttonListing}
          </div>
        </div>

        <section className=" grid md:grid-cols-4 grid-cols-2 md:gap-15 gap-5 items-center mt-10">
          {LandList &&
            LandList.map((land, index) => {
              return (
                <div
                  key={index}
                  className="relative max-w-full md:w-[220px] w-[210px]  h-[190px] rounded-xl relative"
                  style={{
                    backgroundImage: `url(${land.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="loveIcon absolute top-4 right-4 text-white text-[20px]">
                    <FaRegHeart />
                  </div>
                  <div className="bg-white md:w-[200px] w-[185px] absolute md:top-35 top-30 md:left-2 flex justify-between left-3 p-[5px] rounded">
                    <div>
                      <h3 className="text-[11px]">{land.names}</h3>
                      <p className="text-[10px]">{land.location}</p>
                    </div>
                    <button
                      className="text-[10px] border-1 px-3  py-0 rounded bg-[#1266e3] text-white"
                      onClick={() =>
                        viewLandProduct(land.id, land.names, land.category)
                      }
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
        </section>
      </section>
    </>
  );
};

export default LandBody;
