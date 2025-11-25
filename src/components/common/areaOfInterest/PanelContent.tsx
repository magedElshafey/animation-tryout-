import React from "react";
import { GoArrowRight } from "react-icons/go";
import SwappingBtn from "../buttons/SwappingBtn";
import { useLanguage } from "@/store/LanguageProvider";

interface PanelProps {
  title: string;
  text: string;
  img: string;
  btnTitle: string;
  link: string;
  isActive?: boolean;
}

const PanelContent: React.FC<PanelProps> = ({
  title,
  text,
  img,
  btnTitle,
  link,
  isActive,
}) => {
  const duration = "2000ms";
  const { language } = useLanguage();

  return (
    <div
      className={`
        absolute inset-0 flex flex-col lg:flex-row-reverse justify-between items-start lg:items-end w-full h-full
        transition-opacity
        ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}
      `}
      style={{ transitionDuration: duration }}
    >
      {/* Image Wrapper */}
      <div className="img-wrapper w-full h-full relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className={`
            absolute inset-0 w-full h-full transition-transform
            ${
              isActive
                ? "translate-x-0 opacity-100"
                : `${
                    language === "ar" ? "translate-x-full" : "-translate-x-full"
                  } opacity-0`
            }
          `}
          style={{ transitionDuration: duration }}
        />
      </div>

      {/* Data / Text Content */}
      <div
        className={`data w-full md:w-[40%] xl:w-[60%] ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transitionProperty: "opacity",
          transitionDuration: duration,
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <h3 className="font-normal text-4xl mb-5">{title}</h3>
        <p
          className="mb-8 font-light text-[#383731]"
          style={{ wordSpacing: "8px" }}
        >
          {text}
        </p>

        {/* Buttons */}
        <SwappingBtn btnTitle={btnTitle} link={link} />
      </div>
    </div>
  );
};

export default PanelContent;
