import Image from "next/image";
const GrapheneSection = () => {
  return (
    <div className="md:rounded-md  border-b-2 mt-5 border-orange-100 md:border-b-0 md:mt-10">
      <h2 className="font-bold mb-3 ml-5 font-[Open-Sans] text-yellow-200 text-2xl pt-2 flex-1">
        Graphene/h-BN Solar{" "}
      </h2>
      <article className="lg:flex">
        <div className="lg:w-3/4 lg:flex justify-end">
          <div className="mb-7 ">
            <p className=" font-[Merriweather] text-white leading-7 px-5 tracking-wide text-[18px]">
              Because, the thickness of Graphene/h-BN Solar is orders of
              magnitude thinner than Silicon Solar to make a new higher level of
              efficiency by elimination of electron loss by minimizing distance
              to point of harvest, thermal electric cool to maintain operating
              temperature, and reduced cost by only grams of photoactive
              materials to manufacture Graphene/h-BN Solar.
            </p>
          </div>
        </div>
        <div className="w-3/4 m-auto mb-7 px-4">
          <Image
            className="rounded-md"
            src="/images/grapine.jpeg"
            alt="g"
            height={50}
            width={100}
            layout="responsive"
          />
        </div>
      </article>
    </div>
  );
};

export default GrapheneSection;
