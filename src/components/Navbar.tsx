"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { LiaTimesSolid } from "react-icons/lia";
import { TbMenu4 } from "react-icons/tb";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

type NavBar = string[];

const Navbar = () => {
  const [navList] = useState<NavBar>([
    "Home",
    "About",
    "Consultancy",
    "Construction",
    "Contact us",
    "Sign up",
    // "Login",
  ]);

  const pathname = usePathname();
  const [menuModal, setMenuModal] = useState<boolean>(false);

  const handleMenuModal = () => {
    console.log("clicked");
    setMenuModal((prev) => !prev);
  };

  const NavBarMapping = navList.map((nav, index) => {
    const navLowerCase =
      typeof nav === "string" && nav.split(" ")[0].toLowerCase();

    const pathNameCheck = pathname === `/${navLowerCase}`;
    return (
      <Link
        className={`text-[#0d1c39] md:text-[16px] text-[14px] ${
          pathNameCheck ? "border-b border-[#0d1c39]" : "border-none"
        } hover:md:bg-transparent hover:bg-gray-300 md:p-auto p-1 rounded`}
        href={`${navLowerCase}`}
        key={index}
      >
        {nav}
      </Link>
    );
  });
  return (
    // 1266e3
    // bg-[#0d1c39]
    <header
      className={`relative flex  justify-between items-center w-full  z-10 bg-white md:px-20 px-5  shadow ${poppins.className}`}
    >
      <div>
        <Image
          src="/images/logo.png"
          width={80}
          height={100}
          alt="company-Logo"
          priority
        />
      </div>
      <div className="md:hidden block" onClick={handleMenuModal}>
        <TbMenu4 className="text-[30px]" />
      </div>
      <nav
        className={` p-5 md:static md:w-auto md:h-auto w-[150px] h-[500px] md:sticky absolute top-20 right-0
       flex flex-col md:flex-row gap-5 md:bg-transparent bg-gray-200 md:block ${
         menuModal ? "block" : "hidden"
       }`}
      >
        <LiaTimesSolid className="md:hidden block text-[25px]" />
        {NavBarMapping}
      </nav>
    </header>
  );
};
export default Navbar;
