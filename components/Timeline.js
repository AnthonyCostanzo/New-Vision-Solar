import Image from "next/image";
const TimeLine = () => {
  return (
    <div className="flex">
      <div className="relative w-full mb-16  md:mx-10 h-[22rem] md:h-[28rem] lg:h-[43rem] ">
        <div className=" w-full">
          <Image
            src="/images/time.png"
            alt="p"
            className="md:rounded-lg"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
