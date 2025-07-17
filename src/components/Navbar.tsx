"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LiaTimesSolid } from "react-icons/lia";
import { TbMenu4 } from "react-icons/tb";
import { CiSearch, CiUser } from "react-icons/ci";

type NavBar = {
  navName: string;
  navLink: string;
};

const Navbar = () => {
  const [navList] = useState<NavBar[]>([
    { navName: "Home", navLink: "/" },
    { navName: "About", navLink: "about" },
    { navName: "Consultancy", navLink: "consultancy" },
    { navName: "Construction", navLink: "construction" },
    { navName: "Contact us", navLink: "contact" },
    { navName: "Create Listing", navLink: "create" },
    { navName: "Login", navLink: "login" },
  ]);

  const pathname = usePathname();
  const [menuModal, setMenuModal] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMenuModal = () => {
    setMenuModal((prev) => !prev);
  };

  const NavBarMapping = navList.map((nav, index) => {
    const pathNameCheck = mounted && pathname === `/${nav.navLink}`;

    return (
      <Link
        className={`text-[#0d1c39] md:text-[16px] text-[14px] ${
          pathNameCheck ? "border-b border-[#0d1c39]" : "border-none"
        } hover:md:bg-transparent hover:bg-gray-300 md:p-3 p-1 rounded`}
        href={`/${nav.navLink}`}
        key={index}
      >
        {nav.navName}
      </Link>
    );
  });

  return (
    <header className="relative flex justify-between items-center w-full z-10 bg-white md:px-20 px-[10px] shadow">
      <div>
        <Image
          src="/images/logo.png"
          width={80}
          height={100}
          alt="company-Logo"
          priority
          className="w-auto h-auto"
        />
      </div>

      <nav
        className={`p-5 md:static md:w-auto md:h-auto w-[150px] h-[500px] md:sticky absolute top-20 right-0
        flex flex-col md:flex-row gap-10 md:bg-transparent bg-gray-200 md:block ${
          menuModal ? "block" : "hidden"
        }`}
      >
        <LiaTimesSolid className="md:hidden block text-[25px]" />
        {NavBarMapping}
      </nav>

      <form action="" className="flex bg-gray-100 p-2 items-center rounded">
        <CiSearch className="text-[20px] text-gray-500" />
        <input
          type="text"
          placeholder="Search Location or Name"
          className="border-none outline-none placeholder:text-[14px]"
        />
      </form>
      <div className="user text-[30px]">
        <CiUser />
      </div>
      <div className="md:hidden block" onClick={handleMenuModal}>
        <TbMenu4 className="text-[30px]" />
      </div>
    </header>
  );
};

export default Navbar;
