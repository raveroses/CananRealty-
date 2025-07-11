"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { CiSearch } from "react-icons/ci";
import { PiBuildingApartment } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineVilla } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import "swiper/css";

type Image = string[];
const Hero = () => {
  const images: Image = [
    "/images/Modern2.png",
    "/images/unsplash.jpeg",
    "/images/unsplash2.jpg",
  ];

  const ImageMap = images.map((img, index) => {
    return (
      <SwiperSlide
        key={index}
        className="w-full max-w-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </SwiperSlide>
    );
  });
  return (
    <section className="relative z-0">
      <Swiper
        modules={[Autoplay, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        scrollbar={{ draggable: true }}
        className="w-full max-w-full h-[500px]"
      >
        {ImageMap}
      </Swiper>
      <section className="absolute top-0 z-10 md:left-20 left-5 ">
        <div className=" text-white drop-shadow-lg mt-[150px] ">
          <h1 className="font-bold md:text-[30px] text-[25px]">
            Find the perfect place to Live with your family
          </h1>
          <p className="md:text-[18px] text-[15px]">
            Let’s find a home that’s perfect for you
          </p>

          <div className="search text-black md:w-[500px] w-[370px]  max-w-full mt-[20px] ">
            <div className="categoryName flex justify-between bg-white py-1 px-4 w-[200px] rounded-t-md text-[14px] border-b-1 border-gray-100">
              <h3 className="border-b-2 md:text-[15px] text-[13px]">All</h3>
              <h3 className="border-b-2 md:text-[15px] text-[13px]">
                For Sales
              </h3>
              <h3 className="border-b-2 md:text-[15px] text-[13px]">
                For Rent
              </h3>
            </div>
            <div className="input bg-white flex justify-between  items-center px-4 py-2 rounded rounded-l-none">
              <input
                type="text"
                placeholder="Enter Detail"
                className="md:w-[400px] w-[250px] bg-gray-300 p-1 border-none outline-none focus:border-[#0d1c39]
                 focus:shadow-[0px_3px_16px_#0d1c39] rounded placeholder:text-[14px] "
              />
              <CiSearch className="text-[35px] font-bold text-white bg-black px-2 rounded-full" />
            </div>
          </div>

          <div className="icons flex gap-5 py-3">
            <button className="flex items-center gap-1">
              <div className="bg-black p-2 rounded-full">
                <CiHome />
              </div>
              <h3 className="text-[12px]">Home</h3>
            </button>
            <button className="flex items-center gap-1">
              <div className="bg-black p-2 rounded-full">
                <PiBuildingApartment />
              </div>

              <h3 className="text-[12px]">Apartment</h3>
            </button>
            <button className="flex items-center gap-1">
              <div className="bg-black p-2 rounded-full">
                <HiOutlineBuildingOffice2 />
              </div>

              <h3 className="text-[12px]">Office</h3>
            </button>
            <button className="flex items-center gap-1">
              <div className="bg-black p-2 rounded-full">
                <MdOutlineVilla />
              </div>

              <h3 className="text-[12px]">Villa</h3>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Hero;
