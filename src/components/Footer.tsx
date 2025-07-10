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
      className={`bg-[#0d1c39]  h-auto py-10 md:px-20 px-[10px] ${poppins.className} text-white`}
    >
      <div className="logo ">
        <Image src="/images/logo.png" width={100} height={100} alt="logo" />
      </div>

      <div className="grid md:grid-cols-5 grid-cols-2 items-center md:gap-30 gap-10">
        <div className="sbscribe">
          <h3 className="text-[14px] font-bold">Subscribe</h3>
          <p className="text-[13px] font-medium">Keep Yourself Upto Date</p>
          <div className=" md:w-[220px] w-[180px] border  border-white flex items-center gap-5 p-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email "
              className="md:w-[150px] w-[130px] px-1 text-black text-[13px] bg-gray-100 placeholder:text-black placeholder:text-[10px] rounded border-none outline-none focus:shadow-[0px_3px_16px_#0d1c39]  focus:border-white "
            />
            <FaRegPaperPlane className="cursor-pointer" />
          </div>
        </div>

        <div className="support">
          <h3 className="text-[14px] font-bold">Support</h3>
          <address className="text-[13px] font-medium">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </address>
          <address className="text-[13px] font-medium">
            exclusivestore@gmail.com
          </address>
        </div>

        <div className="account">
          <h3 className="text-[14px] font-bold">Account</h3>
          <h5 className="text-[11px] font-bold">My Account</h5>
          <p className="text-[13px] font-medium">Register/Login</p>
          <p className="text-[13px] font-medium">Cart</p>
          <p className="text-[13px] font-medium">Shop</p>
        </div>
        <div className="quick">
          <h3 className="text-[14px] font-bold">Quick Link</h3>
          <p className="text-[13px] font-medium">Privacy Policy</p>
          <p className="text-[13px] font-medium">Terms Of Use</p>
          <p className="text-[13px] font-medium">FAQs</p>
          <p className="text-[13px] font-medium">Contact</p>
        </div>
        <div>
          <h3 className="text-[14px] font-bold">Download App</h3>
          <Image
            alt="Download"
            src="/images/scan.png"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
