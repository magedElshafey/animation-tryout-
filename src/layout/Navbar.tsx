import { useState, useEffect } from "react";
import { navbarLinks } from "@/data/data";
import Logo from "@/components/common/logo/Logo";
import SidebarIcon from "./SidebarIcon";
import Sidebar from "./Sidebar";
import MegaMenu from "./MegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import MainBtn from "@/components/common/buttons/MainBtn";
import { NavbarLink } from "@/types/navbar";
import createSlug from "@/utils/createSlug";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY + 10) setShowNavbar(false);
      else if (current < lastScrollY - 10) setShowNavbar(true);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="relative z-50">
        <nav
          className={`fixed top-4 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-10 xl:right-10 2xl:left-12 2xl:right-12 py-5 px-6 rounded-full bg-gradient-to-r from-[#f0f0f025] via-[#dcdcdc35] to-[#f0f0f025] backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-500 ease-in-out ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-32 opacity-0"
          } flex items-center justify-between`}
        >
          {/* Left */}
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            <Logo />

            {/* Navbar links */}
            <ul className="hidden lg:flex gap-6 items-center font-medium">
              {navbarLinks.map((item: NavbarLink) => (
                <li
                  key={item.title}
                  onMouseEnter={() => setOpenItem(item.title)}
                  onMouseLeave={() => setOpenItem(null)}
                >
                  {item.list ? (
                    <div className="flex items-center gap-2 cursor-pointer">
                      <p>{item.title}</p>
                      <IoIosArrowDown size={20} />
                    </div>
                  ) : (
                    <Link to={`/${createSlug(item.title)}`}>{item.title}</Link>
                  )}

                  <MegaMenu
                    item={item}
                    isOpen={openItem === item.title}
                    onClose={() => setOpenItem(null)}
                  />
                </li>
              ))}
            </ul>

            <LanguageSwitcher />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <MainBtn text="register your interest" />
            <SidebarIcon openSidebar={() => setIsSidebarOpen(true)} />
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
