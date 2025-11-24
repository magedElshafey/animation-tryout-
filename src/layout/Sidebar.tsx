import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import { navbarLinks } from "@/data/data";
import LanguageSwitcher from "./LanguageSwitcher";
import MainBtn from "@/components/common/buttons/MainBtn";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  return (
    <>
      <Backdrop
        isOpen={isOpen}
        onClick={onClose}
        aria="close sidebar navigation"
      />
      <aside
        className={`fixed top-0 right-0 h-screen overflow-y-auto w-[85%] bg-white shadow-md border z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[-800%]"
        }`}
        aria-hidden={!isOpen}
        aria-label="Sidebar Navigation"
      >
        <nav aria-label="Main Navigation" className="mt-2 px-4">
          <ul className="flex flex-col px-4">
            {navbarLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  onClick={onClose}
                  to={item.title}
                  className="block text-lg font-medium text-transition mb-4"
                >
                  {t(item.title)}
                </Link>
              </li>
            ))}
            <li className="py-2 border-b ms-2">
              <LanguageSwitcher />
            </li>
            <li>
              <MainBtn
                onClick={() => onClose()}
                text="register your interest"
                className="bg-green-700 text-white !px-4 w-fit"
              />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default memo(Sidebar);
