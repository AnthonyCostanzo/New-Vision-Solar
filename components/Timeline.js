import Image from "next/image";
const TimeLine = () => {
  return (
    <div className="flex">
      <div className="relative mt-[-2.5rem] lg:mb-6 lg:mt-[2.5rem] mx-2 w-full h-[22rem] rounded-lg md:h-[28rem] lg:h-[48rem] ">
        <div className=" w-full rounded-lg">
          <Image
            src="/images/time.png"
            alt="p"
            className="rounded-md"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
