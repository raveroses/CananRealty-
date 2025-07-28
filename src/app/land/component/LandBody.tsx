"use client";
import { FaRegHeart } from "react-icons/fa";
import useContextRetrieval from "@/app/context/useContextRetrieval";
import { LuBath } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
const LandBody = () => {
  const {
    viewLandProduct,
    landButtonListing,
    landUi,
    landId,
    handleLandBtnClicking,
  } = useContextRetrieval();

  return (
    <>
      <section className="md:px-20 px-[10px]  my-20">
        <div className="flex items-center justify-between">
          <div className="heads">
            <h1 className="md:text-[30px] text-[22px] font-bold">
              Residential
            </h1>
            <p className="text-[15px]">25 Residential Land Found </p>
          </div>

          <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
            {landButtonListing.map((button, index) => {
              return (
                <div
                  className={`border-1 text-center md:text-[13px] text-[10px] py-1 px-2 rounded cursor-pointer ${
                    landId.toLowerCase() === button.toLowerCase() &&
                    "bg-black text-white"
                  }`}
                  key={index}
                  onClick={() => handleLandBtnClicking(button)}
                >
                  {button}
                </div>
              );
            })}
          </div>
        </div>

        <section className=" grid md:grid-cols-3 grid-cols-1 md:gap-15 gap-5 items-center mt-10">
          {landUi &&
            landUi.map((land, index) => {
              return (
                <div key={index}>
                  <div
                    className="max-w-full md:w-[320px] w-full md:h-[190px] h-[250px] rounded-t py-2 px-2 "
                    style={{
                      backgroundImage: `url(${land.image})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="loveIcon flex justify-end  text-white text-[20px] ">
                      <FaRegHeart />
                    </div>
                  </div>
                  <div
                    className="bg-white w-full flex justify-between p-[5px] rounded-b-xl shadow px-5"
                    onClick={() =>
                      viewLandProduct(land.id, land.names, land.category)
                    }
                  >
                    <div>
                      <h3 className="text-[15px] font-semibold">
                        {land.names}
                      </h3>
                      <p className="text-[14px]">{land.location}</p>
                    </div>
                    <div className="price-Infographic">
                      <h3 className="font-medium text-right ">${land.price}</h3>
                      <div className="infographic flex items-center gap-3">
                        <div className="flex gap-1 items-center">
                          <h2 className="md:text-[14px] text-[12px]">4</h2>
                          <IoBedOutline className="md:text-[15px] text-[12px]" />
                        </div>
                        <div className="flex gap-1 items-center">
                          <h2 className="md:text-[14px] text-[12px]">2</h2>
                          <LuBath className="md:text-[15px] text-[12px]" />
                        </div>
                        <div className="flex gap-1 items-center">
                          <h2 className="md:text-[14px] text-[12px]">4</h2>
                          <RiSofaLine className="md:text-[15px] text-[12px]" />
                        </div>
                      </div>
                    </div>
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
