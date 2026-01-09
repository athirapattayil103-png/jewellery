import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineSync } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Feature = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-2 text-white">
    <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black text-xl">
      {icon}
    </div>
    <p className="font-semibold text-sm">{title}</p>
    <p className="text-xs text-gray-300">{desc}</p>
  </div>
);

const HeroFooter = () => {
  return (
    <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md py-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <Feature icon={<FaPlaneDeparture />} title="Free shiping" desc="On order over ₹2000" />
        <Feature icon={<MdOutlineSync />} title="Moneyback" desc="Moneyback guarantee" />
        <Feature icon={<BiSupport />} title="24/7 Support" desc="Online consultations" />
        <Feature icon={<RiSecurePaymentLine />} title="Secure payment" desc="Safe Shopping Guarantee" />
      </div>
    </div>
  );
};

export default HeroFooter;
