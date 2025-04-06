import logo from "../../assets/images/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full">
      {/*  === mobile mode === */}
      <section className="xl:hidden flex items-center justify-between my-5  w-full">
        <MobileNav />
        <Link to="/">
          <img
            src={logo}
            alt="femi logo"
            width="100px"
            className="cursor-pointer"
          />
        </Link>
      </section>
      {/* === desktop mode === */}
      <section className=" hidden xl:flex xl:my-5  xl:w-full">
        <DesktopNav />
      </section>
    </header>
  );
}

export default Header;
