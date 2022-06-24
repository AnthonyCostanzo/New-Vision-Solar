import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => (
  <footer className="border-t-4  border-slate-100 bg-[url('/images/l.svg')] bg-no-repeat bg-cover">
    <div className="text-white ml-10 pt-5 grid space-y-3 font-[Merriweather] ">
      <h3 className="text-[24px] font-bold">Contact Us</h3>
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
            className="cursor-pointer hover:scale-110"
            size={33}
          />
        </div>
        <div>
          <AiOutlineFacebook
            className="cursor-pointer hover:scale-110"
            size={33}
          />
        </div>
        <div>
          <AiOutlineLinkedin
            className="cursor-pointer hover:scale-110"
            size={33}
          />
        </div>
      </div>
    </div>
    <span className="inline-block text-white w-full text-center">
      <small className="text-[14px] inline-block mt-10">
        {" "}
        New Vision Solar Inc &#174;
      </small>
    </span>
  </footer>
);

export default Footer;
