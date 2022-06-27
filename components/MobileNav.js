import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Link from "next/link";

const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-main";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Product", link: "/product" },
  { name: "Patent", link: "/patent" },
  { name: "Neat Green", link: "/neatgreen" },
  { name: "Our Team", link: "/team" },

  { name: "Contact", link: "/contact" },
];
const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  return (
    <div className="bg-gradient-to-r from-[#5e5d5d] to-[#949494] ">
      <div className="grid grid-cols-3 md:flex md:items-center">
        <div className="col-span-2 p-2 min-w-max">
          <Link href="/" passHref={true} scroll={false}>
            <h1 className="p-2 w-max lg:w-[20rem] font-extrabold cursor-pointer hover:text-main md:ml-10 md:mr-2 text-2xl font-[Bebas-Neue] text-slate-100 ">
              New Energy Solutions Inc
            </h1>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNavDropdown toggleNav={toggleNavMenu} />
        </div>

        <DesktopNav />
      </div>

      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 md:hidden bg-gradient-to-r from-[#494848] to-[#83ad8a] pb-5 animate-fade border-slate-100 w-screen leading-8">
          <div className="mt-5">
            {navItems.map((route, i) => (
              <Link scroll={false} key={i} href={route.link} passHref>
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
