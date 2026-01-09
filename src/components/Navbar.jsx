
import React from "react";
import logo from "../assets/Logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle, FaRegHeart, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  const items = [
    "OFFERS",
    "EARRINGS",
    "DEVOTIONAL",
    "BANGLE",
    "BRACELET",
    "PLATINUM",
    "SOLITAIRE",
    "PENDANT",
    "RINGS",
    "NOSE PIN",
    "COUPLE BAND",
    "NECKLACE",
    "NAVARATNA",
  ];

  return (
    <div className="w-full bg-[#E7F66C] border-b-4">
      
      {/* 🔹 TOP ROW */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <img src={logo} alt="logo" className="h-10 " />

        {/* SEARCH */}
        <div className="relative w-[420px]">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full border border-black rounded-md px-4 py-2 text-sm pr-10 "
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>

        {/* ICONS */}
        <div className="flex gap-5 text-xl">
          <IoMdNotificationsOutline />
          <FaUserCircle />

          <FaRegHeart />
          <MdOutlineShoppingCart />
        </div>
      </div>

      {/* 🔹 BOTTOM ROW (CATEGORY MENU) */}
      <div className="flex justify-center gap-11 pb-3 text-xs font-semibold">
        {items.map((item) => (
          <button
            key={item}
            className="hover:underline underline-offset-4"
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Navbar;
