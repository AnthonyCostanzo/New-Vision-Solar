import Image from "next/image";
const Problems = () => (
  <div className="bg-gradient-to-br from-main to-[#fdfbfb] grid md:grid-cols-2 gap-5 md:gap-10 pb-10">
    <div className="p-4">
      <Image
        src="/images/Problems.png"
        alt="p"
        className="rounded-md"
        height={100}
        width={180}
        layout="responsive"
      />
    </div>
    <div className="p-4">
      <Image
        src="/images/prod.png"
        alt="p"
        className="rounded-md"
        height={100}
        width={180}
        layout="responsive"
      />
    </div>{" "}
  </div>
);

export default Problems;
