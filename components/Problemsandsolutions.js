import Image from "next/image";
const ProblemsAndSolutions = () => {
  return (
    <div className="">
      <h2 className="font-bold mb-3 ml-5 font-[Open-Sans] text-yellow-200 text-2xl pt-2 flex-1">
        Problems and Solutions{" "}
      </h2>
      <article className="">
        <div className=" ">
          <p className="font-[Merriweather] text-white leading-7 px-5 tracking-wide text-[18px]">
            <span className="font-semibold">
              Silicon Solar Require 2.5 Acres Per Megawatt{" "}
            </span>
            . Graphene/h-BN Solar requires less than an acre per megawatt by
            capture the {`visual spectrum of light`} plus a portion of the
            highest energy Ultra Violet light increases the Solar Energy capture
            efficiency over Silicon material, that only capture “red light”.
            <span className="font-semibold">
              {" "}
              Silicon Solar Requires “Silicon Material” Chinese Sole Sourced
            </span>
            . Graphene/h-BN material, manufactured mainly from abundant low-cost
            natural gas instead Silicon eliminates all of the associated supply
            chain problems.
          </p>
        </div>{" "}
      </article>
    </div>
  );
};

export default ProblemsAndSolutions;
