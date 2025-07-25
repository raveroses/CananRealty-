"use client";
import { FaRegHeart } from "react-icons/fa";
import useContextRetrieval from "@/app/context/useContextRetrieval";
import { LuBath } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
const ProductListingBody = () => {
  const { buttonListing, SalesProduct, RentProduct, Rentbutton, viewProduct } =
    useContextRetrieval();

  return (
    <section className="md:px-20 px-[10px] my-20">
      <div className="flex items-center justify-between">
        <div className="heads">
          <h1 className="md:text-[30px] text-[22px] font-bold">
            Property For Sales
          </h1>
          <p className="text-[15px]">Unlimited Offer</p>
        </div>

        <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
          {buttonListing}
        </div>
      </div>

      <section className="grid md:grid-cols-3 grid-cols-1 md:gap-19 gap-5 items-center mt-20">
        {SalesProduct &&
          SalesProduct.map((property, index) => {
            return (
              <div key={index}>
                <div
                  className="max-w-full md:w-[320px] w-full md:h-[190px] h-[250px] rounded-t py-2 px-2 "
                  style={{
                    backgroundImage: `url(${property.image})`,
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
                    viewProduct(
                      property.id,
                      property.service,
                      property.category
                    )
                  }
                >
                  <div>
                    <h3 className="text-[15px] font-semibold">
                      {property.heading}
                    </h3>
                    <p className="text-[14px]">{property.paragraph}</p>
                  </div>
                  <div className="price-Infographic">
                    <h3 className="font-medium text-right ">$3,500,000</h3>
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

      {/* ENDING OF GRID PROPERTY SALES */}

      {/* BEGINING OF RENT */}
      <section className="rent my-20">
        <div className="flex items-center justify-between ">
          <div className="heads">
            <h1 className="md:text-[30px] text-[22px] font-bold">
              Property For Rent
            </h1>
            <p className="text-[15px]">Unlimited Offer</p>
          </div>

          <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
            {Rentbutton}
          </div>
        </div>

        <section className="grid md:grid-cols-3 grid-cols-1 md:gap-19 gap-5 items-center mt-20">
          {RentProduct &&
            RentProduct.map((property, index) => {
              return (
                <div key={index}>
                  <div
                    className="max-w-full md:w-[320px] w-full md:h-[190px] h-[250px] rounded-t py-2 px-2 "
                    style={{
                      backgroundImage: `url(${property.image})`,
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
                      viewProduct(
                        property.id,
                        property.service,
                        property.category
                      )
                    }
                  >
                    <div>
                      <h3 className="text-[15px] font-semibold">
                        {property.heading}
                      </h3>
                      <p className="text-[14px]">{property.paragraph}</p>
                    </div>
                    <div className="price-Infographic">
                      <h3 className="font-medium text-right ">$3,500,000</h3>
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
    </section>
  );
};

export default ProductListingBody;
