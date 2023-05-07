import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";



const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  let scrolly = 0

  const controlNavbar = () => {
    if(window.scrollY > 200){
      if(window.scrollY > scrolly && !mobileMenu){
        setShow("-translate-y-[80px]")
        // console.log(window.scrollY + " " + lastScrollY)
      }else{
        setShow("shadow-md")
        console.log(1)
      }
    }else{
      setShow("translate-y-0")
    }
    scrolly = window.scrollY
  }

  useEffect(() => {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
  },[])

  return (
    <header
      className={`w-full h-[50px] md:h-80px bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={`h-[60px] flex justify-between items-center`}>
        <Link href={"/"}>
          <img className="w-[40px] md:w-[60px]" src="/logo.svg" />
        </Link>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

        { mobileMenu &&
          <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} setMobileMenu={setMobileMenu} />         
        }
        
        <div className="flex items-center gap-2 text-black">

          {/* heart item start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]"
            >
              44
            </div>
          </div>
          {/* heart item end */}

          {/* cart item start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2" >
            <BsCart className="text-[15px] md:text-[20px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]"
            >
              3
            </div>
          </div>
          {/* cart item end */}

          {/* mobile menu icon start */}
          <div onClick={() => setMobileMenu((e) => !e)} className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative" >
              {
                mobileMenu ? (
                  <VscChromeClose className="text-[16px]"  />
                ) : (
                  <BiMenuAltRight className="text-[22px]"  />
                )
              }
          </div>
          {/* mobile menu icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
