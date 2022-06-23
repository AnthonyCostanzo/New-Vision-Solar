import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <div className="h-[47em] lg-h-[50rem] relative bg-black">
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
    <div className=" h-3/6 p-5 pt-36 flex flex-col z-10 relative text-gray-100">
      <h2 className="ml-4 lg:ml-12 text-[40px] max-w-md font-bold text-[Montserrat]">
        Pioneers of Solar And Renewable Energy
      </h2>
      <blockquote className="ml-4 lg:ml-12 max-w-md text-[18px] text-semibold font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </blockquote>
      <button className="shadow-lg w-fit mb-12 shadow-green-100/50 bg-main  cursor-pointer rounded-full ml-3 md:ml-10 font-semibold mt-3 p-3 text-white">
        <Link href="#solar" passHref>
          <span className="mx-3 hover:text-orange-200">Read More</span>
        </Link>
      </button>
    </div>
  </div>
);

export default Hero;
