"use client";
import { FaRegHeart } from "react-icons/fa";
import useContextRetrieval from "@/app/context/useContextRetrieval";
const ProductListingBody = () => {
  const { buttonListing, SalesProduct, RentProduct, Rentbutton, viewProduct } =
    useContextRetrieval();

  return (
    <section className="md:px-20 px-[10px] my-20">
      <div className="flex items-center justify-between">
        <div className="heads">
          <h1 className="md:text-[30px] text-[25px] font-bold">
            Property For Sales
          </h1>
          <p className="text-[15px]">Unlimited Offer</p>
        </div>

        <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
          {buttonListing}
        </div>
      </div>

      <section className="grid md:grid-cols-4 grid-cols-2 md:gap-19 gap-5 items-center mt-20">
        {SalesProduct &&
          SalesProduct.map((property, index) => {
            return (
              <div
                key={index}
                className="relative max-w-full md:w-[220px] w-[210px]  h-[190px] rounded-xl relative"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="loveIcon absolute top-4 right-4 text-white text-[20px] cursor-pointer">
                  <FaRegHeart />
                </div>
                <div
                  className="bg-white absolute md:top-35 top-30 md:left-2 flex md:gap-12 left-3 gap-7 
                 p-[5px] rounded"
                >
                  <div>
                    <h3 className="text-[11px]">{property.heading}</h3>
                    <p className="text-[10px]">{property.paragraph}</p>
                  </div>
                  <button
                    className="text-[10px] border-1 px-3 py-0 rounded bg-[#1266e3] text-white cursor-pointer"
                    onClick={() =>
                      viewProduct(
                        property.id,
                        property.service,
                        property.category
                      )
                    }
                  >
                    {property.view}
                  </button>
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
            <h1 className="md:text-[30px] text-[25px] font-bold">
              Property For Rent
            </h1>
            <p className="text-[15px]">Unlimited Offer</p>
          </div>

          <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
            {Rentbutton}
          </div>
        </div>

        <section className="grid md:grid-cols-4 grid-cols-2 md:gap-19 gap-5 items-center mt-20">
          {RentProduct &&
            RentProduct.map((property, index) => {
              return (
                <div
                  key={index}
                  className="relative max-w-full md:w-[220px] w-[210px]  h-[190px] rounded-xl relative"
                  style={{
                    backgroundImage: `url(${property.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="loveIcon absolute top-4 right-4 text-white text-[20px] cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div
                    className="bg-white absolute md:top-35 top-30 md:left-2 flex md:gap-12 left-3 gap-7 
                 p-[5px] rounded"
                  >
                    <div>
                      <h3 className="text-[11px]">{property.heading}</h3>
                      <p className="text-[10px]">{property.paragraph}</p>
                    </div>
                    <button
                      className="text-[10px] border-1 px-3 py-0 rounded bg-[#1266e3] text-white cursor-pointer"
                      onClick={() =>
                        viewProduct(
                          property.id,
                          property.service,
                          property.category
                        )
                      }
                    >
                      {property.view}
                    </button>
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
