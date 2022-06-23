import Image from "next/image";
const Problems = () => (
  <div className="bg-gradient-to-br from-[#5e5d5d] to-[#dbd7d7] p-5">
    <div className="bg-blue-800 w-full m-auto">
      <Image
        src="/images/Problems.png"
        alt="p"
        className="rounded-md"
        height={125}
        width={300}
        layout="responsive"
      />
    </div>{" "}
  </div>
);

export default Problems;
