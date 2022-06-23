import Image from "next/image";
const IndustrySection = () => {
  return (
    <div className="md:rounded-md border-b-2 border-sky-100 md:border-b-0">
      <h2 className="font-bold text-slate-800 text-center text-2xl pt-2 flex-1">
        Solar Industry{" "}
      </h2>
      <article className="flex">
        <div className="w-3/4">
          <p className="m-auto font-[Merriweather] mt-3 p-2 ml-3 mr-2 text-xl tracking-wide text-slate-800">
            Grown to over $184 billion in 2021 and continued growth is expected
            to $293 billion by 2028 (FinancialNewsMedia.com). Dr. Zuckerman has
            created a solar technology that will change the Solar Industry over
            the next 5 years introduction of Graphene/h -BN Solar with 300% More
            Energy and significantly lower cost than Silicon Solar.
          </p>
        </div>
        <div className="md:px-2 m-auto py-4 w-1/4 mr-3">
          <Image
            className="rounded-md"
            src="/images/solar.jpeg"
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

export default IndustrySection;
