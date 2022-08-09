import Link from "next/link";

const navRouteLink =
  "text-gray-100 font-[Open-Sans] ml-2 text-[20px] min-w-max cursor-pointer hover:text-main hover:scale-110";

const DesktopNav = () => (
  <ul className="hidden lg:flex lg:ml-auto lg:w-8/12 lg:space-x-5 justify-around">
    <Link href={"/"} passHref scroll={false}>
      <li className={navRouteLink}>Home</li>
    </Link>
    <Link href={"/product"} passHref scroll={false}>
      <li className={navRouteLink}>Product</li>
    </Link>
    <Link href={"/patent"} passHref scroll={false}>
      <li className={navRouteLink}>Patent</li>
    </Link>
    <div className="group ">
      <li className={navRouteLink}>Exciting New Products</li>

      <ul className=" hidden transition-all duration-300 animate-fade group-hover:grid text-[18px] shadow-sm shadow-green-200 p-2 min-h-max w-52 border-b-[1.5px] border-x-[1px] border-white">
        <Link href={"/petro"} passHref scroll={false}>
          <li className={`${navRouteLink}`}>Petro Fluids</li>
        </Link>
        <Link href={"/b2oil"} passHref scroll={false}>
          <li className={navRouteLink}>B2 Oil</li>
        </Link>
      </ul>
    </div>
    <Link href={"/team"} passHref scroll={false}>
      <li className={navRouteLink}>Our Team</li>
    </Link>
    <Link href={"/contact"} passHref scroll={false}>
      <li className={navRouteLink}>Contact</li>
    </Link>
  </ul>
);

export default DesktopNav;
