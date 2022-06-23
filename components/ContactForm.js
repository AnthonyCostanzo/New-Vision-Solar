import { BsFillPersonFill, BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { TiSocialTwitterCircular } from "react-icons/ti";
const ContactForm = () => {
  return (
    <>
      <section className=" text-center mt-10 p-5 text-white ">
        <h2 className="text-2xl mb-1 font-semibold">
          How Can We Help with Your Experience
        </h2>
        <p className="max-w-sm m-auto">
          Feel free to voice all questions or concerns and we will get back to
          you as soon as possible!
        </p>
      </section>
      <form className="border-black min-w-max bg-gray-500 lg:w-5/12 border-4 rounded-lg mt-6 p-5 min-h-fit w-3/4 m-auto grid gap-7 justify-center ">
        <h2 className="text-[24px] h-5 font-[Open-Sans] text-gray-50">
          Get In Touch
        </h2>
        <div className="grid gap-7">
          <div className="min-w-max">
            <label htmlFor="name">
              <BsFillPersonFill className="inline-block text-main" size={24} />{" "}
            </label>
            <input
              className="rounded-md ml-3 p-1 w-60 lg:w-80 focus:scale-105"
              type="text"
              id="name"
              name="name"
              placeholder=" John Doe"
            />
          </div>
          <div className="min-w-max">
            <label htmlFor="email">
              {" "}
              <AiTwotoneMail
                className="inline-block text-main "
                size={24}
              />{" "}
            </label>
            <input
              className="rounded-md ml-3 p-1 w-60 lg:w-80 focus:scale-105"
              type="email"
              id="email"
              name="email"
              placeholder=" joe@gmail.com"
            />
          </div>
          <div className="min-w-max ">
            <label htmlFor="subject relative">
              {" "}
              <BsFillPencilFill className="absolute text-main" size={24} />{" "}
            </label>
            <textarea
              className="rounded-md ml-10 p-1 w-60 lg:w-80 focus:scale-105"
              id="subject"
              name="subject"
              placeholder=" Message Body "
            />
          </div>
          <button className="bg-main text-white rounded-full p-2 hover:opacity-90 ">
            Submit
          </button>
          <div>
            <IoLocationOutline className="inline-block text-main" size={25} />
            <span className="inline-block mt-2 ml-3 cursor-pointer font-[Times] text-[18px] text-white hover:translate-x-2 hover:-translate-y-0.5 ">
              123 Street, New York, USA
            </span>
          </div>
          <div>
            <BsTelephone className="inline-block text-main" size={25} />
            <span className="inline-block ml-3 hover:translate-x-2 cursor-pointer font-[Times] text-[18px] text-white  hover:-translate-y-0.5">
              123-456-7890
            </span>
          </div>
          <div>
            <AiOutlineMail className="inline-block text-main" size={25} />
            <span className="inline-block ml-4 hover:translate-x-2 cursor-pointer font-[Times] text-[18px] text-white  hover:-translate-y-0.5">
              joe@gmail.com
            </span>
          </div>
          <div className="flex gap-5 pt-3 justify-around cursor-pointer">
            <div>
              {" "}
              <TiSocialTwitterCircular
                className="inline-block text-white hover:scale-110 "
                size={28}
              />
            </div>
            <div>
              <AiOutlineFacebook
                className="inline-block text-white hover:scale-110"
                size={28}
              />
            </div>
            <div>
              <AiOutlineLinkedin
                className="inline-block text-white hover:scale-110"
                size={28}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
