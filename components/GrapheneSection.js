import Image from "next/image";
const GrapheneSection = () => {
  return (
    <div className=" ">
      <h2 className="text-center font-bold text-2xl pt-2">
        Graphene/h-BN Solar{" "}
      </h2>
      <article className="flex">
        <div className="w-3/4">
          <p className="m-auto font-[Merriweather] mt-3 ml-3 p-2 mr-2 text-xl tracking-wide">
            Because, the thickness of Graphene/h-BN Solar is orders of magnitude
            thinner than Silicon Solar to make a new higher level of efficiency
            by elimination of electron loss by minimizing distance to point of
            harvest, thermal electric cool to maintain operating temperature,
            and reduced cost by only grams of photoactive materials to
            manufacture Graphene/h-BN Solar.
          </p>
        </div>
        <div className="md:px-2 m-auto py-4 w-1/4 mr-3">
          <Image
            className="rounded-md "
            src="/images/grapine.jpeg"
            alt="g"
            height={150}
            width={100}
            layout="responsive"
          />
        </div>
      </article>
    </div>
  );
};

export default GrapheneSection;
