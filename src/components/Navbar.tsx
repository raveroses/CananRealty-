"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

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

  const NavBarMapping = navList.map((nav, index) => {
    const navLowerCase =
      typeof nav === "string" && nav.split(" ")[0].toLowerCase();
    console.log(navLowerCase);

    const pathNameCheck = pathname === `/${navLowerCase}`;
    console.log(navLowerCase);
    return (
      <Link
        className={`text-[#0d1c39] ${
          pathNameCheck ? "border-b border-[#0d1c39]" : "border-none"
        }`}
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
      className={`flex  justify-between items-center w-full sticky top-0 z-10 bg-white px-4  shadow ${poppins.className}`}
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
      <nav className="flex gap-5">{NavBarMapping}</nav>
    </header>
  );
};
export default Navbar;
