import Head from "next/head";
import MobileNav from "./MobileNav";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";
const Layout = ({ title, description, children }) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            description
              ? description
              : `New Vision Solar Inc. is developing New Graphene/h-BN Solar technology/(product). Dr. Zuckerman, the Founder, has created a solar technology that
will change the Solar Industry over the next 5 years introduction of Graphene/h-BN Solar with 300% More Energy and significantly lower cost than Silicon Solar.`
          }
        ></meta>

        <title>{title ? title : "New Vision Solar"}</title>
      </Head>

      <body className="bg-gray-100 min-w-screen">
        {" "}
        <MobileNav />
        <div className="min-w-screen max-w-max">{children}</div>
        <footer className="bg-slate-800">
          <div className="text-white ml-5 md:hidden pt-5 grid space-y-3 font-[Merriweather] ">
            <h3 className="text-xl">Contact Us</h3>
            <div>
              <IoLocationOutline className="inline-block" size={25} />
              <span className="inline-block mt-2 ml-3 cursor-pointer hover:translate-x-2 hover:-translate-y-0.5 ">
                123 Street, New York, USA
              </span>
            </div>
            <div>
              <BsTelephone className="inline-block" size={25} />
              <span className="inline-block mt-2 ml-3 hover:translate-x-2 cursor-pointer  hover:-translate-y-0.5">
                123-456-7890
              </span>
            </div>
            <div>
              <AiOutlineMail className="inline-block" size={25} />
              <span className="inline-block mt-2 ml-4 hover:translate-x-2 cursor-pointer  hover:-translate-y-0.5">
                joe@gmail.com
              </span>
            </div>
            <div className="grid grid-cols-3  pt-3 w-3/12 cursor-pointer">
              <div>
                {" "}
                <TiSocialTwitterCircular className="inline-block" size={28} />
              </div>
              <div>
                <AiOutlineFacebook className="inline-block" size={28} />
              </div>
              <div>
                <AiOutlineLinkedin className="inline-block" size={28} />
              </div>
            </div>
          </div>
          <span className="inline-block text-white w-full text-center">
            <small className="text-[14px] inline-block mt-3 pt-14">
              {" "}
              New Vision Solar Inc &#174;
            </small>
          </span>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
