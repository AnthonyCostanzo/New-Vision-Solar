import Link from "next/link";

const navRouteLink =
  "text-gray-100 font-[Open-Sans] text-[20px] min-w-max cursor-pointer hover:text-main hover:scale-110";
const navItems = [
  { name: "Home", link: "/" },
  { name: "Product", link: "/product" },
  { name: "Patent", link: "/patent" },
  { name: "Petro Fluids", link: "/petro" },
  { name: "Our Team", link: "/team" },

  { name: "Contact", link: "/contact" },
];

const DesktopNav = () => (
  <ul className="hidden lg:flex lg:ml-auto lg:w-8/12 lg:space-x-5 justify-around">
    {navItems.map((route, i) => (
      <Link key={i} href={route.link} passHref scroll={false}>
        <li className={navRouteLink}>{route.name}</li>
      </Link>
    ))}
  </ul>
);

export default DesktopNav;
