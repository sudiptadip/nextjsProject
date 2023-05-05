import { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-80px bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={`h-[60px] flex justify-between items-center`} >
        <Link href={'/'} >
          <img className="w-[40px] md:w-[60px]" src="/logo.svg" />
        </Link>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Wrapper>
    </header>
  );
};

export default Header;
