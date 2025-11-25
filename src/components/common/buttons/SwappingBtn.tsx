import { useLanguage } from "@/store/LanguageProvider";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface SwappingBtnProps {
  btnTitle: string;
  link: string;
}

const SwappingBtn: React.FC<SwappingBtnProps> = ({ btnTitle, link }) => {
  const { language } = useLanguage();
  return (
    <>
      <Link
        to={`/${link}`}
        className="btns flex justify-start items-center mt-5 gap-2 group"
      >
        <span
          className={`w-14 h-14 flex items-center justify-center rounded-full bg-[#006450] text-white text-3xl transition-transform duration-1000 ${
            language === "ar"
              ? "mr-5 group-hover:-translate-x-64"
              : "group-hover:translate-x-64"
          }`}
        >
          {language === "ar" ? <GoArrowLeft /> : <GoArrowRight />}
        </span>

        <span className="w-48 h-14 flex items-center justify-center rounded-full bg-[#006450] text-white uppercase text-lg">
          {btnTitle}
        </span>
      </Link>
    </>
  );
};

export default SwappingBtn;
