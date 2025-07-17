"use client";
import { useEffect, useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { HiArrowsPointingIn } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaRegUserCircle } from "react-icons/fa";
import { Property } from "@/app/data/PropertyListing";

type Props = {
  properties: Property; // replace with actual type if you have one
};

const SelectedProduct = ({ properties }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  console.log("clients", properties);
  const [state, handleSubmit] = useForm("xjkvdqjb");

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      toast.success("Thanks, We'll get back to you 🎉");
      formRef.current.reset();
    }
  }, [state.succeeded]);

  // const handleOnchange:

  return (
    <section className="md:px-20 px-[10px] mt-20 ">
      <div className="Image flex flex-col md:flex-row gap-10">
        <div className="parent-Image">
          <Image
            src={properties.image}
            alt="image-card"
            width={620}
            height={600}
            className="rounded-xl w-auto h-auto"
            priority
          />
        </div>

        <div className="smallerImage grid grid-cols-2 auto-rows-fr gap-3 mt-1">
          <Image
            src="/images/Modern2.png"
            alt="image-card"
            width={300}
            height={300}
            className="rounded-xl"
            priority
          />
          <Image
            src="/images/Modern2.png"
            alt="image-card"
            width={300}
            height={300}
            className="rounded-xl"
            priority
          />
          <Image
            src="/images/Modern2.png"
            alt="image-card"
            width={300}
            height={300}
            className="rounded-xl"
            priority
          />
        </div>
      </div>
      <section className="flex md:flex-row flex-col justify-between w-full mt-20">
        <div className="details md:w-[60%] w-full">
          <div className="description bg-[#ffffff] shadow rounded p-5 flex flex-col gap-2">
            <div className="bg-[#1266e3] w-[50px] py-1 px-3 text-[12px] rounded-xl text-white">
              Sale
            </div>
            <h2 className="md:text-[25px] text-[20px] font-bold ">
              {properties.heading}
            </h2>
            <address className="flex items-center text-gray-400 md:text-[16px] text-[14px]">
              <span>
                <CiLocationOn />
              </span>
              Survey No 81/4, Tathewade, Next to Ivy League, Tal. Mulsi,
              Pune-411057
            </address>
            <div className="deet flex gap-10 items-center">
              <p className="flex items-center">
                <span className="bg-gray-300 rounded-full text-gray-600 p-1 mr-1 ">
                  <IoBedOutline />
                </span>
                2 Beds
              </p>
              <p className="flex items-center">
                <span className="bg-gray-300 rounded-full text-gray-600 p-1 mr-1 ">
                  <LuBath />
                </span>
                2 Baths
              </p>
              <p className="flex items-center">
                <span className="bg-gray-300 rounded-full text-gray-600 p-1 mr-1 ">
                  <HiArrowsPointingIn />
                </span>
                Sqm
              </p>
            </div>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem
              value="item-1"
              className="bg-[#ffffff] shadow rounded py-1 px-3 mt-5"
            >
              <AccordionTrigger className="font-semibold text-[15px]">
                Description
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-[#ffffff] shadow rounded py-1 px-3 mt-5"
            >
              <AccordionTrigger className="font-semibold text-[15px]">
                Amenities
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-[#ffffff] shadow rounded py-1 px-3 mt-5"
            >
              <AccordionTrigger className="font-semibold text-[15px]">
                Location
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-[#ffffff] shadow rounded py-1 px-3 mt-5"
            >
              <AccordionTrigger className="font-semibold text-[15px]">
                Document
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="textArea  border h-auto md:w-[32%] w-full bg-[#ffffff] shadow pb-5 mb-10 md:mt-0 mt-10 rounded-t-xl ">
          <div className="flex items-center px-5 py-10 gap-3 bg-[#1266e3] text-white rounded-t-xl">
            <FaRegUserCircle className="text-[40px]" />
            <h3 className="text-[16px] font-bold">Odekunle Waris</h3>
          </div>

          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 px-5 pt-10"
            ref={formRef}
          >
            <label
              htmlFor="property"
              className="font-semibold text-[14px] text-[#1266e3]"
            >
              Property Name
            </label>
            <input
              type="text"
              id="property"
              name="propertyName"
              className="py-2 border-none outline-none bg-gray-100 px-1 rounded placeholder:text-[14px]"
              placeholder="Property Name"
              defaultValue={properties.heading}
              readOnly
              required
            />
            <ValidationError
              prefix="PropertyName"
              field="propertyName"
              errors={state.errors}
            />
            <label
              htmlFor="name"
              className="font-semibold text-[14px] text-[#1266e3]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="py-2 border-none outline-none bg-gray-100 px-1 rounded placeholder:text-[14px]"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label
              htmlFor="email"
              className="font-semibold text-[14px] text-[#1266e3]"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              defaultValue="odekunlewaris@gmail.com"
              readOnly
              required
              className="py-2 border-none outline-none bg-gray-100 px-1 rounded placeholder:text-[14px]"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="number"
              className="font-semibold text-[14px] text-[#1266e3]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Your Phone Number"
              className="py-2 border-none outline-none bg-gray-100 px-1 rounded placeholder:text-[14px]"
            />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
            <label
              htmlFor="description"
              className="font-semibold text-[14px] text-[#1266e3]"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="I'm Interested"
              defaultValue="I'm Interested in this property"
              required
              readOnly
              className="py-2 border-none outline-none bg-gray-100 px-1 h-[150px] placeholder:text-[14px]"
            ></textarea>
            <ValidationError
              prefix="Description"
              field="description"
              errors={state.errors}
            />
            <button
              type="submit"
              className="bg-[#1266e3] text-white p-2 text-center rounded"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
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
    </section>
  );
};

export default SelectedProduct;
