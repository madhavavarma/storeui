import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavMenu } from "./NavMenu";
import { useEffect, useState } from "react";
import { useNavigationHelper } from "@/hooks/use-navigate-helper";
 

const Header: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);
  const navigationHelper = useNavigationHelper();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`flex flex-col mb-[140px]`}>
      
      {/* Fixed Header */}
      <header id="headerContainer" className="text-white fixed w-full top-0 left-0 z-10 shadow-md">
       
        {/* Main Header */}
        <div
          id="mainHeader"
          className={` pl-2 pr-2 bg-[#5dbf13] h-[80px] flex items-center w-full transition-all duration-500 ${scrolled ? 'hidden' : ''}`}
        >
          <div className="w-full pl-2 pr-2">
            <div className="flex items-center justify-between">
              <span>
                <img
                  src="https://themezhub.net/odex-live/odex/assets/img/logo-light.png"
                  className="max-w-[120px]"
                  alt="Logo"
                  onClick={() => navigationHelper.goToHome()}
                />
              </span>
              <span>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
            </div>
          </div>
        </div>

        {/* Nav Header */}
        <div
          id="navHeader"
          className={`bg-[#1ca301] w-full flex items-center transition-all duration-300 ease-in-out ${
            scrolled ? 'h-0 fixed top-0 left-0 z-50 overflow-hidden' : 'h-[60px] fixed z-50'
          }`}
        >
          <div className="w-full z-50">
            <div className="flex items-center justify-between">
              <span>
                <NavMenu />
              </span>
            </div>
          </div>
        </div>

        {/* Nav Header 2 */}
        {<div
          id="navHeader"
          className={`bg-[#1ca301] w-full flex items-center transition-all duration-300 ease-in-out ${
            !scrolled ? 'h-0 fixed top-0 left-0 z-50 overflow-hidden' : 'h-[60px] fixed top-0 left-0 z-50'
          }`}
        >
          <div className="w-full z-50">
            <div className="flex items-center justify-between">
              <span>
                <NavMenu />
              </span>
            </div>
          </div>
        </div> }
      </header>

      
      
    </section>
  );
};

export default Header;
