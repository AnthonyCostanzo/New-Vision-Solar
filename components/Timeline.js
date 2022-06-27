import Image from "next/image";
const TimeLine = () => {
  return (
    <div className="grid mx-5 m-auto mt-10 mb-7">
      <Image
        src="/images/time.png"
        alt="p"
        className="rounded-lg"
        layout="responsive"
        height={135}
        width={175}
        // objectFit="contain"
      />
    </div>
  );
};

export default TimeLine;
