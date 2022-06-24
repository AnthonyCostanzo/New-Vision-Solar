import Image from "next/image";
const Problems = () => (
  <div className="bg-[url('/images/Wave.svg')] grid md:grid-cols-2 gap-5 pt-5 md:gap-10 pb-5">
    <div className="p-5">
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
