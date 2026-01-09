import { FaRegHeart } from "react-icons/fa";
import ring from"../assets/ring.svg"
import ring2 from"../assets/ring2.svg"
import earring1 from"../assets/earring1.svg"
import earring2 from"../assets/earring2.svg"

const products = [
  {
    id: 1,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    img: ring,
  },
  {
    id: 2,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    img: earring1,
  },
  {
    id: 3,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    img: ring2,
  },
  {
    id: 4,
    name: "Diamond ring",
    sku: "18037",
    price: "27000",
    img: earring2,
  },
];

const NewArrivals = () => {
  return (
    <section className="bg-[#1c1c1c] py-16 px-6 ">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-start mb-10">
        <div>
          <h2 className="font-solway text-white text-2xl">
            New Arrivals
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            234 New item added
          </p>
        </div>
        <button className="text-xs text-white hover:underline">
          See all
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#0f1111] rounded-xl p-4 relative"
          >
            {/* HEART */}
            <FaRegHeart className="absolute top-4 right-4 text-gray-400 cursor-pointer" />

            {/* IMAGE */}
            <div className="bg-gradient-to-b from-black to-[#142112] rounded-lg p-6 flex items-center justify-center h-48">
              <img
                src={item.img}
                alt={item.name}
                className="h-28 object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="mt-4 text-white">
              <p className="text-sm">{item.name}</p>
              <p className="text-[10px] text-gray-400">
                SKU: {item.sku}
              </p>
            </div>

            {/* PRICE */}
            <p className="text-white font-semibold text-sm mt-2">
              {item.price}
            </p>

            {/* ACTIONS */}
            <div className="flex items-center gap-2 mt-4">
              <button className="flex-1 bg-[#E7F66C] text-black text-xs py-2 rounded-md font-semibold hover:opacity-90">
                ADD TO CART
              </button>
              <button className="w-10 h-9 border border-[#E7F66C] rounded-md flex items-center justify-center text-[#E7F66C]">
                <FaRegHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
