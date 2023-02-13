import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";
import Link from "next/link";
const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[1rem] px-14 cursor-pointer hover:translate-x-2 hover:text-green-300";

const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const router = useRouter();
  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  const handleChange = (event) => {
    if (event.target.value === "") return;
    router.push(event.target.value);
  };
  return (
    <div className="bg-gradient-to-br from-main to-green-600 min-h-max py-2 ">
      <div className="flex items-center">
        <div className="">
          <div className="mx-4 md:mx-7 ">
            <Link href="/" passHref={true} scroll={false}>
              <h1 className="md:text-[1.18rem] min-w-max cursor-pointer font-bold text-orange-50 font-serif">
                Methes Energies International
              </h1>
            </Link>
          </div>
        </div>
        <div className="w-[22%]">
          <MobileNavDropdown toggleNav={toggleNavMenu} />
        </div>
        <DesktopNav />
      </div>
      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 md:hidden pb-5 animate-fade border-slate-100 leading-8">
          <div className="mt-5">
            <Link scroll={false} href="/" passHref>
              <li className={navRouteLink}>Home</li>
            </Link>
            <Link scroll={false} href="/product" passHref>
              <li className={navRouteLink}>Product</li>
            </Link>

            <Link scroll={false} href="/team" passHref>
              <li className={navRouteLink}>Our Team</li>
            </Link>

            <Link scroll={false} href="/contact" passHref>
              <li className={navRouteLink}>Contact</li>
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
