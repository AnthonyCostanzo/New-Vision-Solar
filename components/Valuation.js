import Image from "next/image";
const Valuation = () => (
  <div
    className="h-[20rem] md:h-[38rem] lg:h-[45rem] w-full relative "
    id="solar"
  >
    <div className="flex  bg-red-50 h-full w-full justify-center">
      <Image
        src={`/images/bs.png`}
        className="shadow-sm shadow-green-200"
        layout="fill"
        alt="a"
      ></Image>
    </div>{" "}
  </div>
);

export default Valuation;
