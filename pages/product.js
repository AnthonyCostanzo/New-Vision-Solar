import Layout from "../components/Layout";
import Image from "next/image";
import Problems from "../components/Problems";
import Link from "next/link";
const Product = () => (
  <Layout>
    <div className="h-[45rem] relative bg-black">
      <div className="bg-blue-200 h-full w-full absolute opacity-40 md:opacity-50 ">
        <Image
          src="/images/prodbg.jpeg"
          height={200}
          width={50}
          alt="a"
          layout="fill"
          objectFit="cover"
          objectPosition={"bottom"}
        ></Image>
      </div>
      <div className=" h-3/6 p-5 pt-32 lg:pt-40  flex flex-col z-10 relative text-gray-50 ">
        <h2 className="ml-4 leading-snug lg:ml-12 text-[40px] max-w-md font-bold text-[Montserrat]">
          Product Overview & Financials
        </h2>
        <blockquote className="ml-4 lg:ml-12 max-w-md text-[18px] text-semibold font-sans">
          Learn more about our groundbreaking product and gain some insight on
          what the future holds in store !
        </blockquote>
        <div className="grid grid-cols-2 mt-3 w-64 ml-2 lg:ml-11">
          <button className="shadow-md  w-fit p-2 mb-12 shadow-green-100/50 bg-main  cursor-pointer rounded-full font-semibold  text-white">
            <Link href="#finance" passHref>
              <span className="mx-3 hover:text-yellow-200">Financing</span>
            </Link>
          </button>
          <button className="shadow-md  w-fit p-2 mb-12 shadow-green-100/50 bg-orange-300  cursor-pointer rounded-full font-semibold  text-white">
            <Link href="#inventor" passHref>
              <span className="mx-3 hover:text-yellow-200">Inventor</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
    <Problems />
  </Layout>
);

export default Product;
