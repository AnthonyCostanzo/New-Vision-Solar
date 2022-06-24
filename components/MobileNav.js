import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Link from "next/link";

const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-orange-300";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "/team" },
  { name: "Patent", link: "/patent" },
  { name: "Contact", link: "/contact" },
];
const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  return (
    <div className="bg-gradient-to-br from-[#565656] to-[#9b9b9b]">
      <div className="flex w-full m-auto justify-around md:justify-start items-center">
        <div className="w-8/12 md:w-3/12 min-w-fit border-r-2 md:border-r-[1px] border-[#fabd4b8a]">
          <h1 className="p-2 mr-16 md:ml-10 md:mr-2 text-2xl font-[Bebas-Neue] text-[#95ff9ff7] ">
            New Vision Solar Inc
          </h1>
        </div>
        <MobileNavDropdown toggleNav={toggleNavMenu} />
        <DesktopNav />
      </div>

      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 bg-gradient-to-r from-sky-700 to-sky-400 pb-5 animate-fade border-main w-screen leading-8">
          <div className="mt-5">
            {navItems.map((route, i) => (
              <Link key={i} href={route.link} passHref>
                <li className={navRouteLink}>{route.name}</li>
              </Link>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
