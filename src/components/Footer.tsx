"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { FaRegPaperPlane } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const Footer = () => {
  return (
    <footer
      className={`bg-[#0d1c39] h-[400px] px-20 ${poppins.className} text-white`}
    >
      <div className="logo">
        <Image src="/images/logo.png" width={100} height={100} alt="logo" />
        <h3>Subscribe</h3>
        <p>Keep Yourself Upto Date</p>
        <div className=" w-[250px] border  border-white flex items-center gap-8 p-2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email "
            className="w-[180px] px-1 text-black text-[13px] bg-gray-100 
            placeholder:text-black  border-none outline-none focus:shadow-[0px_3px_16px_#0d1c39] 
            focus:border-white"
          />
          <FaRegPaperPlane />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
