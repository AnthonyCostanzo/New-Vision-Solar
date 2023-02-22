import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";
import Link from "next/link";
const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[1rem] px-14 cursor-pointer hover:translate-x-2 hover:text-green-500";

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
    <nav className="bg-gradient-to-br from-slate-500 to-slate-600 min-h-max py-3 md:py-5">
      <div className="flex justify-around md:gap-40 lg:gap-0 items-center ">
        <div className="">
          <div className="mx-4 md:mx-0 md:mr-40 lg:mr-0 lg:mx-4">
            <Link href="/" passHref={true} scroll={false}>
              <h1 className="md:text-[1.18rem] min-w-max cursor-pointer font-bold text-white font-serif">
                Methes Energies International
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <MobileNavDropdown toggleNav={toggleNavMenu} />
        </div>

        <DesktopNav />
      </div>
      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 lg:hidden pb-5 animate-fade border-slate-100 leading-8">
          <div className="mt-5">
            <Link scroll={false} href="/" passHref>
              <li className={navRouteLink}>Home</li>
            </Link>
            <Link scroll={false} href="/about" passHref>
              <li className={navRouteLink}>About</li>
            </Link>
            <Link scroll={false} href="/marketplace" passHref>
              <li className={navRouteLink}>Marketplace</li>
            </Link>
            <Link scroll={false} href="/product" passHref>
              <li className={navRouteLink}>Products</li>
            </Link>
            <Link scroll={false} href="/packaging" passHref>
              <li className={`${navRouteLink} `}>Packaging</li>
            </Link>
            <Link scroll={false} href="/performance" passHref>
              <li className={`${navRouteLink} `}>Performance</li>
            </Link>
            <Link scroll={false} href="/team" passHref>
              <li className={navRouteLink}>Management</li>
            </Link>

            <Link scroll={false} href="/contact" passHref>
              <li className={navRouteLink}>Contact</li>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
