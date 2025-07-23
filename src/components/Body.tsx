"use client";
import Image from "next/image";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart, FaSackDollar } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { TfiKey } from "react-icons/tfi";
import { JSX } from "react/jsx-runtime";
import Link from "next/link";

import useContextRetrieval from "@/app/context/useContextRetrieval";
type Service = {
  heading: string;
  paragraph: string;
  buttonContent: string;
  buttonIcon: JSX.Element;
  image: string;
};

const Body = () => {
  const { buttonListing, Rentbutton, SalesProduct, RentProduct, viewProduct } =
    useContextRetrieval();
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

  return (
    <section className="md:px-20 px-[10px] py-10">
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
                className="max-w-full md:w-[220px] w-[210px]  h-[190px] rounded-xl py-2 px-2 "
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="loveIcon flex justify-end  text-white text-[20px] mb-[106px] ">
                  <FaRegHeart />
                </div>
                <div className="bg-white w-full flex justify-between p-[5px] rounded">
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
      <Link href="/property">
        {" "}
        <button className="w-[200px] md:mx-100 mx-30 my-5 bg-[#1266e3] cursor-pointer text-white text-font text-[13px] p-2 rounded ">
          VIew More
        </button>
      </Link>
      {/* ENDING OF GRID PROPERTY SALES */}

      <div className="bg-[#0d1c39] md:px-30 px-0 py-20 mt-30">
        <div className="text-white text-center mb-20">
          <h3 className="md:text-[25px] text-[20px] font-bold">
            See How Realtor Can Help
          </h3>
          <p className="text-[13px]">Adding to clients value and assets </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10 items-center">
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
                      className="object-center"
                      style={{ width: "auto", height: "auto" }}
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
                  className="max-w-full md:w-[220px] w-[210px]  h-[190px] rounded-xl py-2 px-2 "
                  style={{
                    backgroundImage: `url(${property.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="loveIcon flex justify-end  text-white text-[20px] mb-[106px] ">
                    <FaRegHeart />
                  </div>
                  <div className="bg-white w-full flex justify-between p-[5px] rounded">
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
        <Link href="/property">
          <button className="w-[200px] md:mx-120 mx-30 my-5 bg-[#1266e3] text-white text-font text-[13px]  cursor-pointer p-2 rounded ">
            VIew More
          </button>
        </Link>
      </section>

      <section className="why flex md:flex-row flex-col items-center justify-center gap-20 bg-gray-200 p-10">
        <Image
          src="/images/Modern.png"
          alt="why he choose us"
          width={300}
          height={300}
          priority
          className="w-auto h-auto"
        />

        <div className="md:w-[350px] w-full h-auto">
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

      <section className="land flex md:flex-row flex-col justify-center items-center gap-20 bg-gray-200 p-10 my-20">
        <Image
          src="/images/land.png"
          alt="why he choose us"
          width={300}
          height={300}
          priority
          className="w-auto h-auto"
        />

        <div className="quote md:w-[500px] w-full md:text-left text-center">
          <div>
            <i>
              Everyone wants a piece of land; its the only sure investment. It
              can never depreciate like a car or washing machine. The land will
              only double its value in ten years.
            </i>
            <p>
              <i>— Sam Shepard —</i>
            </p>
          </div>

          <Link href="/land">
            <button className="flex items-center bg-[#1266e3] text-white px-3 py-1 rounded md:mx-0 mx-auto cursor-pointer">
              <h3 className="text-[13px] font-bold">Check Out Location</h3>
              <CiLocationOn className="text-[25px]" />
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Body;
