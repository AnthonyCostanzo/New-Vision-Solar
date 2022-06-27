import Image from "next/image";

const IndustrySection = () => {
  return (
    <div className="md:rounded-md border-b-2 mt-5 border-orange-100 md:border-b-0 md:mt-10">
      <h2 className="font-bold mb-3 ml-5 font-[Open-Sans]  text-yellow-200 text-2xl pt-2 flex-1">
        Solar Industry{" "}
      </h2>
      <article className="lg:flex">
        <div className="lg:w-3/4 lg:flex justify-end">
          <div className="mb-7">
            <p className="font-[Merriweather] text-white leading-7 px-5 tracking-wide text-[18px]">
              Grown to over $184 billion in 2021 and continued growth is
              expected to $293 billion by 2028 (FinancialNewsMedia.com). Dr.
              Zuckerman has created a solar technology that will change the
              Solar Industry over the next 5 years introduction of Graphene/h
              -BN Solar with 300% More Energy and significantly lower cost than
              Silicon Solar.
            </p>
          </div>
        </div>
        <div className="w-3/4 m-auto mb-7 px-4">
          <Image
            className="rounded-md"
            src="/images/solar.jpeg"
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

export default IndustrySection;
