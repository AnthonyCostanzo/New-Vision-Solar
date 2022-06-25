import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Link from "next/link";

const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-main";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "/team" },
  { name: "Product", link: "/product" },
  { name: "Patent", link: "/patent" },

  { name: "Contact", link: "/contact" },
];
const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  return (
    <div className="bg-gradient-to-r from-[#5e5d5d] to-[#949494]">
      <div className="flex w-full p-2 m-auto justify-around md:justify-start items-center">
        <div className="w-8/12 md:w-3/12 min-w-fit border-r-2 md:border-r-[1px] border-main">
          <h1 className="p-2 mr-16 font-extrabold cursor-pointer hover:text-main md:ml-10 md:mr-2 text-2xl font-[Bebas-Neue] text-slate-100 ">
            New Vision Solar Inc
          </h1>
        </div>
        <MobileNavDropdown toggleNav={toggleNavMenu} />
        <DesktopNav />
      </div>

      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 md:hidden bg-gradient-to-r from-[#494848] to-[#83ad8a] pb-5 animate-fade border-slate-100 w-screen leading-8">
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
