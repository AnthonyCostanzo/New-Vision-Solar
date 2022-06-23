import Image from "next/image";

const Hero = () => (
  <div className="h-5/6 relative bg-black">
    <div className="bg-blue-200 h-full w-full absolute opacity-60">
      <Image
        src="/images/solar.jpeg"
        height={200}
        width={50}
        alt="a"
        layout="fill"
        objectFit="cover"
        objectPosition={"bottom"}
      ></Image>
    </div>
    <div className="h-3/6 pt-12 flex flex-col z-10 relative text-gray-100">
      <h2 className=" ml-7 text-[40px] max-w-md font-bold text-[Montserrat]">
        Pioneers of Solar And Renewable Energy
      </h2>
      <blockquote className="ml-7 max-w-md text-[18px] text-semibold font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </blockquote>
      <button className="shadow-lg w-fit mb-12 shadow-green-100/50 bg-main  cursor-pointer rounded-full ml-6 font-semibold mt-3 p-3 text-white">
        <span className="mx-3 hover:text-orange-200">Read More</span>
      </button>
    </div>
  </div>
);

export default Hero;
