import React from 'react'
import img1 from"../assets/img1.svg"
import img2 from"../assets/img2.svg"
import img3 from"../assets/img3.svg"
import img4 from"../assets/img4.svg"

const budgets = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img:img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
];

const ShopOnBudget = () => {
  return (
    <section className="bg-[#1c1c1c] py-16">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-lime-400 font-solway text-lg font-medium">
          Shop on Budget
        </h2>
        <p className="text-gray-400 text-xs mt-1">
          We have something for every affordable budget
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {budgets.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-xl overflow-hidden cursor-pointer
              ${item.active ? "ring-2 ring-purple-500" : ""}
            `}
          >
            {/* IMAGE */}
            <img
              src={item.img}
              
              className="h-64 w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* LABEL */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1 rounded-full text-xs text-white">
              {item.label}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopOnBudget;

