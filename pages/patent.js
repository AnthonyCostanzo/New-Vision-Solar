import Layout from "../components/Layout";
import Image from "next/image";
const patent = () => (
  <Layout>
    <div className="min-h-max my-10  px-5">
      <div className="gap-2 md:w-9/12  grid min-h-max relative m-auto">
        <div className="h-nine">
          <Image
            src="/images/p1.jpeg"
            alt="p"
            className="rounded-lg"
            height={800}
            layout="responsive"
            width={800}
          />
        </div>

        <Image
          src="/images/p2.png"
          alt="p"
          className="rounded-lg"
          height={800}
          layout="responsive"
          width={800}
        />
      </div>
    </div>
  </Layout>
);

export default patent;
