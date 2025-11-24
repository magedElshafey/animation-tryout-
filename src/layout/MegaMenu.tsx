import { motion, AnimatePresence } from "framer-motion";
import { NavbarLink } from "@/types/navbar";
import { Link } from "react-router-dom";
import MainBtn from "@/components/common/buttons/MainBtn";
import { GiButterfly } from "react-icons/gi";
import { useLanguage } from "@/store/LanguageProvider";

interface MegaMenuProps {
  item: NavbarLink;
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ item, isOpen, onClose }: MegaMenuProps) => {
  const { language } = useLanguage();
  if (!item.list) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 right-0 top-full  border-transparent border-t-[50px] bg-black/60 p-10 text-white shadow-xl"
          role="menu"
          aria-label={item.title}
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="pe-12 border-e border-gray-500">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm my-5 opacity-75">{item.list.description}</p>
              <MainBtn text="learn more" />
            </div>

            <div>
              {item.list.links.map((link, idx) => (
                <Link
                  key={idx}
                  to={`/${link.title}`}
                  className="flex items-center1 mb-4 hover:opacity-80 uppercase group"
                  onClick={onClose}
                >
                  <GiButterfly
                    size={20}
                    className="opacity-0 duration-300 transition-all group-hover:opacity-100"
                  />
                  <span
                    className={`duration-300 transition-all  ${
                      language === "ar"
                        ? "group-hover:-translate-x-2"
                        : "group-hover:translate-x-2"
                    }`}
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
