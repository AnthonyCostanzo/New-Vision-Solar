import Image from "next/image";
const TimeLine = () => {
  return (
    <>
      <div className="mx-4 my-10">
        <Image
          src="/images/prod.png"
          alt="p"
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>{" "}
      <div className="flex rounded-lg  mb-5">
        <div className="relative mb-5 lg:mb-6 lg:mt-[2.5rem] mx-4 w-full h-[22rem] rounded-lg md:h-[28rem] lg:h-[48rem] ">
          <div className=" w-full rounded-lg">
            <Image
              src="/images/time.png"
              alt="p"
              className="rounded-lg"
              layout="fill"
              // objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
