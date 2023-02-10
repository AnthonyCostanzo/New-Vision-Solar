import Link from "next/link";

const navRouteLink =
  "text-green-50 font-[Open-Sans] ml-2 text-[20px] min-w-max cursor-pointer hover:text-green-300 hover:scale-110";

const DesktopNav = () => (
  <ul className="hidden md:flex ml-auto mr-12 space-x-7 ">
    <Link href={"/"} passHref scroll={false}>
      <li className={navRouteLink}>Home</li>
    </Link>
    <Link href={"/product"} passHref scroll={false}>
      <li className={navRouteLink}>Product</li>
    </Link>

    <Link href={"/team"} passHref scroll={false}>
      <li className={navRouteLink}>Our Team</li>
    </Link>
    <Link href={"/contact"} passHref scroll={false}>
      <li className={navRouteLink}>Contact</li>
    </Link>
  </ul>
);

export default DesktopNav;
