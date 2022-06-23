import Image from "next/image";
import styles from "./Hero.module.css";
const Hero = () => (
  <div className="h-half md:h-hero border-b-2 border-orange-100">
    <div className={`${styles.hero}`}>
      <div className="mt-14 z-10 p-5 h-3/6">
        <h3 className="text-[40px] ml-10 tracking-wide leading-[1.2] font-bold text-white w-2/3 md:w-1/3">
          Pioneers Of Solar And Renewable Energy
        </h3>
        <blockquote className="mt-3 ml-10 w-9/12 text-white md:w-6/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </blockquote>
        <button className="shadow-lg shadow-green-100/50 bg-main  cursor-pointer rounded-full ml-10 font-semibold mt-3 p-3 text-white">
          <span className="mx-3 hover:text-orange-200">Read More</span>
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
