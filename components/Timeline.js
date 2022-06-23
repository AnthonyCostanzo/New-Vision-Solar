import Image from "next/image";
const TimeLine = () => {
  return (
    <div className="relative h-[20rem] w-11/12 lg:h-[45rem] m-auto mb-5">
      <div className="m-5">
        <Image
          src="/images/time.png"
          alt="p"
          className="rounded-lg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default TimeLine;
