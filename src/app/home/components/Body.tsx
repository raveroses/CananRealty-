"use client";
import Image from "next/image";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { TfiKey } from "react-icons/tfi";
import { JSX } from "react/jsx-runtime";
type Service = {
  heading: string;
  paragraph: string;
  buttonContent: string;
  buttonIcon: JSX.Element;
  image: string;
};

type Property = {
  image: string;
  heading: string;
  paragraph: string;
  price: number;
};
const Body = () => {
  const [serviceContent] = useState<Service[]>([
    {
      heading: "Buy a property",
      paragraph: "pppp hdh hh hrhr hhr rhrhr rhrh",
      buttonContent: "Find a home",
      buttonIcon: <GoArrowUpRight />,
      image: "/images/buy2.png",
    },
    {
      heading: "Sell a property",
      paragraph: "pppp hdh hh hrhr hhr rhrhr rhrh",
      buttonContent: "place an ad",
      buttonIcon: <GoArrowUpRight />,
      image: "/images/sell.png",
    },
    {
      heading: "Rent a property",
      paragraph: "pppp hdh hh hrhr hhr rhrhr rhrh",
      buttonContent: "Find a Rental",
      buttonIcon: <GoArrowUpRight />,
      image: "/images/rent.png",
    },
  ]);

  const [propertyListing] = useState<Property[]>([
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
    {
      image: "/images/Modern2.png",
      heading: " Luxury Family Home",
      paragraph: "132 Greene Ave",
      price: 50000,
    },
  ]);
  return (
    <section className="px-20 py-10">
      <div className="flex items-center justify-between">
        <div className="heads">
          <h1 className="text-[30px] font-bold">Property For Sales</h1>
          <p>Unlimited Offer</p>
        </div>

        <div className="category flex items-center gap-[20px]">
          <div className="bg-black text-white text-[13px] py-1 px-2 rounded">
            Homes
          </div>
          <div className="bg-black text-white text-[13px] py-1 px-2 rounded">
            Apartments
          </div>
          <div className="bg-black text-white text-[13px] py-1 px-2 rounded">
            Office
          </div>
          <div className="border-1  text-[13px] py-1 px-2 rounded">Villa</div>
        </div>
      </div>

      <section className="grid grid-cols-4 gap-19 items-center mt-20">
        {propertyListing &&
          propertyListing.map((property, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-[220px] h-[190px] rounded-xl relative"
                  style={{
                    backgroundImage: `url(${property.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="bg-white absolute top-35 flex gap-4 mx-2 p-[5px] rounded">
                    <div>
                      <h3 className="text-[11px]">{property.heading}</h3>
                      <p className="text-[10px]">{property.paragraph}</p>
                    </div>
                    <button className="text-[10px] border-1 px-3 py-0 rounded">
                      ${property.price}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </section>

      {/* ENDING OF GRID PROPERTY SALES */}

      <div className="bg-[#0d1c39] px-30 py-20 mt-30">
        <div className="text-white text-center mb-20">
          <h3 className="text-[25px] font-bold">See How Realtor Can Help</h3>
          <p className="text-[13px]">Adding to clients value and assets </p>
        </div>

        <div className="flex gap-20 items-center">
          {serviceContent &&
            serviceContent.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-white w-[250px] text-center p-5 rounded mx-auto"
                >
                  <div className="mx-10 my-4">
                    <Image
                      src={card.image}
                      alt="card-image"
                      width={100}
                      height={100}
                      objectPosition="center"
                    />
                  </div>

                  <h3 className="text-[14px] font-bold">{card.heading}</h3>
                  <p className="text-[13px]">{card.paragraph}</p>
                  <button className="flex items-center gap-3 border-1 border-black px-3 py-2 mx-auto rounded mt-2 ">
                    <p className="text-[13px] font-bold ">
                      {card.buttonContent}
                    </p>
                    {card.buttonIcon}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {/* BEGINING OF RENT */}
      <section className="rent my-20">
        <div className="flex items-center justify-between ">
          <div className="heads">
            <h1 className="text-[30px] font-bold">Property For Rent</h1>
            <p>Unlimited Offer</p>
          </div>

          <div className="category flex items-center gap-[20px]">
            <div className="bg-black text-white text-[13px] py-1 px-2 rounded">
              Homes
            </div>
            <div className="bg-black text-white text-[13px] py-1 px-2 rounded">
              Apartments
            </div>
            <div className="bg-black text-white text-[13px] py-1 px-2 rounded">
              Office
            </div>
            <div className="border-1  text-[13px] py-1 px-2 rounded">Villa</div>
          </div>
        </div>

        <section className="grid grid-cols-4 gap-19 items-center mt-20">
          {propertyListing &&
            propertyListing.map((property, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="w-[220px] h-[190px] rounded-xl relative"
                    style={{
                      backgroundImage: `url(${property.image})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="bg-white absolute top-35 flex gap-4 mx-2 p-[5px] rounded">
                      <div>
                        <h3 className="text-[11px]">{property.heading}</h3>
                        <p className="text-[10px]">{property.paragraph}</p>
                      </div>
                      <button className="text-[10px] border-1 px-3 py-0 rounded">
                        ${property.price}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </section>
      </section>

      <section className="why flex items-center justify-center gap-20 bg-gray-200 p-10">
        <Image
          src="/images/Modern.png"
          alt="why he choose us"
          width={300}
          height={300}
        />

        <div className="w-[350px] h-auto">
          <div className="mb-8">
            <h3 className="text-[25px] font-bold">Why Choose Us</h3>
            <p className="text-[14px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudian
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="icon bg-[#0d1c39] text-white p-2 text-[20px] rounded-full">
                <RiContactsLine />
              </div>
              <div>
                <h3 className="head text-[14px] font-bold">
                  {" "}
                  Property Mangement
                </h3>
                <div className="para text-[13px] py-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudian
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="icon bg-[#0d1c39] text-white p-2 text-[20px] rounded-full">
                <TfiKey />
              </div>
              <div>
                <h3 className="head text-[14px] font-bold">
                  Mortgage Services
                </h3>
                <div className="para text-[13px] py-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudian
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="icon bg-[#0d1c39] text-white p-2 text-[20px] rounded-full">
                <FaSackDollar />
              </div>
              <div>
                <h3 className="head text-[14px] font-bold">
                  {" "}
                  Currency Services
                </h3>
                <div className="para text-[13px] py-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudian
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="land flex justify-center items-center gap-20 bg-gray-200 p-10 my-20">
        <Image
          src="/images/land.png"
          alt="why he choose us"
          width={300}
          height={300}
        />

        <div className="quote w-[500px]">
          <div>
            <i>
              Everyone wants a piece of land; it's the only sure investment. It
              can never depreciate like a car or washing machine. The land will
              only double its value in ten years.
            </i>
            <p>
              <i>— Sam Shepard —</i>
            </p>
          </div>
          <button className="flex items-center bg-red-600 text-white px-3 py-1 rounded">
            <h3 className="text-[13px] font-bold">Check Out Location</h3>
            <CiLocationOn className="text-[25px]" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Body;
