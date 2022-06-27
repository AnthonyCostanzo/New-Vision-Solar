import Image from "next/image";
const ProblemsAndSolutions = () => {
  return (
    <div className="md:rounded-md  border-b-2 mt-5 border-orange-100 md:border-b-0 md:mt-10">
      <h2 className="font-bold mb-3 ml-5 font-[Open-Sans] text-yellow-200 text-2xl pt-2 flex-1">
        Problems and Solutions{" "}
      </h2>
      <article className="grid md:grid-cols-2 ">
        <div className="mb-7 ">
          <p className=" font-[Merriweather] text-white leading-7 px-5 tracking-wide text-[18px]">
            <span className="font-semibold">
              Silicon Solar Require 2.5 Acres Per Megawatt{" "}
            </span>
            . Graphene/h-BN Solar requires less than an acre per megawatt by
            capture the “entire visual spectrum of light” plus a portion of the
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
        </div>
        <div className=" mx-5 p-3 h-54 min-h-max border-4 min-w-fit  border-main mb-5 text-gray-50 ">
          <h3 className=" text-[23px] mb-3">Benchmarks</h3>
          <div className="grid gap-x-10 gap-y-5  md:grid-cols-2">
            <div className="min-w-max">
              <h4 className="text-[18px]">
                Sales: <span className=" font-bold">$500 million</span>
              </h4>
            </div>

            <div className="min-w-max">
              <h4 className="text-[18px]">
                Solar Panels: <span className=" font-bold"> 40 MW</span>
              </h4>
            </div>
            <div className="min-w-max">
              <h4 className="text-[18px]">
                NJ Equipment Purchase:{" "}
                <span className=" font-bold">$40 million</span>
              </h4>
            </div>
            <div className="min-w-max">
              <h4 className="text-[18px]">
                Jobs: <span className=" font-bold"> 120 permanent</span>
              </h4>
            </div>
            <div className="min-w-max">
              <h4 className="text-[18px]">
                NJ Taxes: <span className=" font-bold"> $20 million</span>
              </h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProblemsAndSolutions;
