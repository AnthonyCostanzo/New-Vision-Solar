import Image from "next/image";
const TimeLine = () => {
  return (
    <div className="relative h-96 md:w-8/12 m-auto md:mb-2 ">
      <div className="max-w-min md:m-2">
        <Image
          src="/images/timeline.jpeg"
          alt="p"
          className="md:rounded-md"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default TimeLine;
