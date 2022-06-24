import Image from "next/image";
const Problems = () => (
  <div className="mt-20 rounded-md grid md:grid-cols-2 gap-20 lg:mx-10 pt-5 pb-20">
    <div className="px-2">
      <Image
        src="/images/Problems.png"
        alt="p"
        className="rounded-md"
        height={200}
        width={250}
        layout="responsive"
      />
    </div>
    <div className="px-2">
      <Image
        src="/images/prod.png"
        alt="p"
        className="rounded-md"
        height={200}
        width={250}
        layout="responsive"
      />
    </div>{" "}
  </div>
);

export default Problems;
