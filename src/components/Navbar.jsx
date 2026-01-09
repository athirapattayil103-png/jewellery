// import React from 'react'
// import logo from"../assets/Logo.svg";
// import { IoMdSearch } from "react-icons/io";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa6";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaSearch } from 'react-icons/fa';


// const Navbar = () => {
//   const items =[
//           "OFFERS",
//           "EARRINGS",
//           "DEVOTIONAL",
//           "BANGLE",
//           "BRACELET",
//           "PLATINUM",
//           "SOLITAIRE",
//           "PENDANT",
//           "RINGS",
//           "NOSE PIN",
//           "COUPLE BAND",
//           "NECKLACE",
//           "NAVARATNA",
//         ]
//   return (
//     <div className='w-full bg-[#E7F66C]  '>
//     <div className="max-w-7xl mx-auto px-4 py-4 flex  items-center justify-between  gap-6 p-6">
//      <img src={logo} alt=""/>
//       <div className="relative w-[420px]  ">
//           <input
//             type="text"
//             placeholder="Search Here"
//             className="w-full border border-black rounded-md px-4 py-2 text-sm "
//           />
//           <FaSearch className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500" />
//           </div>
//           <div className='gap-4 flex flex-end justify-end'>
//            <IoMdNotificationsOutline />
//            <FaRegCircleUser />
//             <FaRegHeart />
//             <MdOutlineShoppingCart />
//           </div>
          
//             <div className="flex justify-center gap-6 text-xs font-semibold pb-3">
//         {items.map((item) => (
//           <button
//             key={item}
//             className="hover:underline underline-offset-4"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
          
//           </div>
          
//     </div>
//   )
// }

// export default Navbar
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
