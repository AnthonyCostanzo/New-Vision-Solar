import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => (
  <footer className="border-t-4 bg-bottom-right border-slate-100 bg-slate-500 ">
    <div className="text-white ml-10 pt-5 grid space-y-3 font-[Merriweather] ">
      <aside className="max-w-fit group">
        {" "}
        <h3 className="text-[24px] font-bold cursor-pointer group-hover:animate-bounce">
          Contact Us
        </h3>
      </aside>

      <div>
        <IoLocationOutline
          className="inline-block hover:scale-110 cursor-pointer"
          size={30}
        />
        <span className="inline-block text-[18px] mt-2 ml-3 cursor-pointer hover:translate-x-2 hover:-translate-y-0.5 ">
          123 Street, New York, USA
        </span>
      </div>
      <div>
        <BsTelephone
          className="inline-block hover:scale-110 cursor-pointer"
          size={26}
        />
        <span className="inline-block text-[18px]  mt-2 ml-3 hover:translate-x-2 cursor-pointer  hover:-translate-y-0.5">
          123-456-7890
        </span>
      </div>
      <div>
        <AiOutlineMail
          className="inline-block hover:scale-110 cursor-pointer"
          size={27}
        />
        <span className="inline-block  text-[18px] mt-2 ml-4 hover:translate-x-2 cursor-pointer  hover:-translate-y-0.5">
          joe@gmail.com
        </span>
      </div>
      <div className="grid grid-cols-3 w-32 pt-3">
        <div>
          {" "}
          <TiSocialTwitterCircular
            className="cursor-pointer hover:scale-110 hover:text-main"
            size={33}
          />
        </div>
        <div>
          <AiOutlineFacebook
            className="cursor-pointer hover:scale-110 hover:text-main"
            size={33}
          />
        </div>
        <div>
          <AiOutlineLinkedin
            className="cursor-pointer hover:scale-110 hover:text-main"
            size={33}
          />
        </div>
        <p className="m-auto text-white min-w-max text-center ">
          <small className="text-[15px] hover:text-main cursor-pointer hover:scale-110 mt-3 font-bold text-gray-50 inline-block relative">
            {" "}
            New Vision Solar Inc &#174;
          </small>
        </p>
      </div>
    </div>
    <div className="w-full h-[7.1rem] bg-[url('/images/bg.svg')] sm:h-44 lg:h-48 bg-slate-500 "></div>
  </footer>
);

export default Footer;
