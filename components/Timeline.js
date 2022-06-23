import Image from "next/image";
const TimeLine = () => {
  return (
    <div className="relative h-96 md:w-8/12 md:m-auto m-2 mb-10 md:mt-0 mt-10 md:mb-2 ">
      <div className="max-w-min md:m-2">
        <Image
          src="/images/timeline.jpeg"
          alt="p"
          className="rounded-lg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default TimeLine;
