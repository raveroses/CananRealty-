"use client";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToastContainer, Bounce } from "react-toastify";
import useStore from "@/app/zustand/useStore";
import { useEffect, useRef } from "react";

const ListFrontPage = () => {
  const {
    isListingNext,
    urls,
    city,
    state,
    category,
    handleFileChange,
    handleOnChange,
    handleCreateDetailFormSubmission,
  } = useStore();
  console.log(isListingNext);
  // useEffect(() => {
  //   try {
  //     const detail = localStorage.getItem("create-detail");
  //     const urls = localStorage.getItem("uploaded-urls");

  //     if (detail) {
  //       setCreateDetail(JSON.parse(detail));
  //     }
  //     if (urls) {
  //       const parsed = JSON.parse(urls);
  //       if (Array.isArray(parsed)) {
  //         setUrls(parsed);
  //       }
  //     }
  //   } catch (err) {
  //     console.error("Failed to load from localStorage", err);
  //   }
  // }, []);

  useEffect(() => {
    try {
      const detail = localStorage.getItem("create-detail");
      const urls = localStorage.getItem("uploaded-urls");

      if (detail) {
        const parsedDetail = JSON.parse(detail);
        useStore.setState({ ...parsedDetail });
      }

      if (urls) {
        const parsedUrls = JSON.parse(urls);
        if (Array.isArray(parsedUrls)) {
          useStore.setState({ urls: parsedUrls });
        }
      }
    } catch (err) {
      console.error("Failed to load from localStorage", err);
    }
  }, []);

  const ref = useRef<HTMLInputElement | null>(null);

  const triggerFileSelect = () => {
    ref?.current?.click();
  };

  return (
    <div className={`md:px-20 px-[10px] ${isListingNext ? "hidden" : "block"}`}>
      <section className="bg-[#ffff] shadow md:w-[800px] w-full md:mx-auto mx-0 mt-20 py-10 md:px-45 px-[10px] ">
        <form
          action=""
          className="flex flex-col gap-5 "
          onSubmit={handleCreateDetailFormSubmission}
        >
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            className="w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Enter State "
            name="state"
            value={state}
            className=" w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Enter City"
            name="city"
            value={city}
            className=" w-full md:py-4 py-3 px-2 border border-gray-400 rounded text-gray-700 
          focus:outline-none focus:shadow-md focus:shadow-[#1266e3] placeholder:text-[14px]"
            onChange={handleOnChange}
          />
          <input
            type="file"
            name="image"
            ref={ref}
            accept="image/*"
            className=""
            onChange={handleFileChange}
            hidden
          />
          <div className="images">
            <h3 className="text-[15px] font-semibold">Add photo</h3>
            <div className="imageCard flex gap-2 ">
              <div className="bg-blue-100 md:w-[100px] w-[150px] h-[100px] rounded-xl py-8">
                <GoPlus
                  className="mx-auto text-[25px] font-bold "
                  onClick={triggerFileSelect}
                />
              </div>

              <div className="w-[300px] flex gap-2 overflow-x-auto">
                {urls &&
                  urls.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="md:min-w-[100px] min-w-[100px] h-[100px] relative"
                      >
                        <Image
                          src={image}
                          alt="image-card"
                          fill
                          className="rounded-xl object-cover object-center"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-[#1266e3] w-full mt-10 text-white font-semibold cursor-pointer hover:bg-blue-300
             hover:text-[#1266e3] transition all-ease duration-2000"
          >
            Next
          </Button>
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default ListFrontPage;
