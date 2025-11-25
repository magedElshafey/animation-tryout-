import { useMediaQuery } from "@/hooks/ui/useMediaQuery";
import { useLanguage } from "@/store/LanguageProvider";
import React, { PropsWithChildren } from "react";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface InterestProps {
  name: string;
  active: boolean;
  onActive: () => void;
}

const InterestBlock: React.FC<PropsWithChildren<InterestProps>> = ({
  name,
  active,
  onActive,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const { language } = useLanguage();
  const navigate = useNavigate();

  const interestLinks: Record<string, string> = {
    "Home Buyer": "/home",
    "Job Seekrs": "/job",
    "Sub-Developer": "/developer",
    "CSR Partners": "/csr-partners",
    Partners: "/partners",
  };

  const handleClick = () => {
    if (!isLargeScreen) {
      onActive();
    } else {
      const target = interestLinks[name];
      if (target) navigate(target);
    }
  };

  return (
    <div
      className={`
        relative flex flex-col justify-between border w-full h-36 p-4 cursor-pointer overflow-hidden
        ${active ? "border-[#006450]" : "border-[#b0afa5]"}
      `}
      onMouseEnter={isLargeScreen ? onActive : undefined}
      onClick={handleClick}
    >
      {/* Overlay */}
      <div
        className={`
          absolute top-0 left-0 h-full bg-[#E0ECEA] transition-all duration-500 z-0
          ${active ? "w-full" : "w-0"}
        `}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center lg:justify-between h-full">
        <button
          className={`
            hidden lg:block h-8 w-8 rounded-full bg-[#006450] text-white text-2xl self-end
            transition-opacity duration-300
            ${active ? "opacity-100" : "opacity-0"}
          `}
        >
          {language == "ar" ? (
            <GoArrowUpLeft className="mr-1" />
          ) : (
            <GoArrowUpRight className="ml-1" />
          )}
        </button>

        <p
          className="transition-shadow duration-300"
          style={{
            wordSpacing: "8px",
            textShadow: active ? "0.2px 0.2px 0.2px #005040" : "none",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default InterestBlock;
