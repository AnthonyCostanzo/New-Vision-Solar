import Link from "next/link";
const navRouteLink =
  "text-green-50 font-[Open-Sans] ml-2 text-[20px] min-w-max cursor-pointer hover:text-orange-300 hover:scale-110";

const DesktopNav = () => {
  return (
    <ul className="hidden lg:flex ml-auto mr-12 space-x-7 ">
      <Link scroll={false} href="/" passHref>
        <li className={navRouteLink}>Home</li>
      </Link>
      <Link scroll={false} href="/about" passHref>
        <li className={navRouteLink}>About</li>
      </Link>
      <Link scroll={false} href="/marketplace" passHref>
        <li className={navRouteLink}>Marketplace</li>
      </Link>
      <div className="group">
        <Link scroll={false} href="/product" passHref>
          <li className={navRouteLink}>Products</li>
        </Link>
        <div>
          <Link scroll={false} href="/packaging" passHref>
            <li className={`${navRouteLink} hidden group-hover:inline-block `}>
              Packaging
            </li>
          </Link>
          <Link scroll={false} href="/performance" passHref>
            <li className={`${navRouteLink} hidden group-hover:block`}>
              Performance
            </li>
          </Link>
        </div>
      </div>
      <Link scroll={false} href="/team" passHref>
        <li className={navRouteLink}>Management</li>
      </Link>

      <Link scroll={false} href="/contact" passHref>
        <li className={navRouteLink}>Contact</li>
      </Link>
    </ul>
  );
};
export default DesktopNav;
