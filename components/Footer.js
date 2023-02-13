import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => (
  <footer className="border-t-4 bg-bottom-right border-slate-200 bg-gradient-to-br from-green-500 to-slate-800  pb-20 pt-5 ">
    <div className="text-slate-50 ml-10 pt-5 grid space-y-3 font-[Merriweather] ">
      <p className=" ">
        <small className="text-[17px] hover:text-orange-300 cursor-pointer hover:scale-110  font-bold text-slate-100 inline-block relative">
          {" "}
          Methes Energies International &#174;
        </small>
      </p>
      <div>
        <IoLocationOutline
          className="inline-block hover:scale-110 cursor-pointer"
          size={30}
        />
        <span className="inline-block text-[18px] mt-2 ml-3 cursor-pointer hover:translate-x-2 hover:-translate-y-0.5 ">
          Orlando, Florida
        </span>
      </div>

      <div>
        <AiOutlineMail
          className="inline-block hover:scale-110 cursor-pointer"
          size={27}
        />
        <span className="inline-block  text-[18px] mt-2 ml-4 hover:translate-x-2 cursor-pointer  hover:-translate-y-0.5">
          info@methes.com
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
      </div>
      <div className="w-10/12">
        <small className="inline-block">
          * The Company expressly disclaims any and all liability for any
          written or oral communication transmitted or made available to an
          interested party. Qualified parties who are interested in pursuing a
          transaction will be given the opportunity to conduct a due diligence
          investigation and ultimately enter into an agreement containing such
          representations and warranties concerning the transaction and the
          Company as are agreed to by the parties.
        </small>
        <small className="inline-block">
          * The Company shall have no legal commitment or obligation to any
          party reviewing the Presentation, unless a written agreement regarding
          the transaction has been fully executed, delivered and approved by the
          Company, and any condition to the Company’s obligations hereunder have
          been satisfied or waived.
        </small>
        <small className="inline-block">
          * This Presentation has been prepared for discussion purposes only.
          This Presentation is not an offer or solicitation for the sale of
          securities. The Presentation is based upon information provided by
          management and other sources deemed to be reliable.
        </small>
      </div>
    </div>

    {/* <div className="w-full h-[7.1rem] bg-[url('/images/bg.svg')] sm:h-44 lg:h-48 bg-slate-500 "></div> */}
  </footer>
);

export default Footer;
