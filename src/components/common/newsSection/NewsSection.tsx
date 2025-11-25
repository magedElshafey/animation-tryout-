import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SwappingBtn from "../buttons/SwappingBtn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/store/LanguageProvider";

const newsData = [
  {
    id: 1,
    date: "Nov 20, 2025",
    title:
      "ROSHN Group Launches ROSHN MUSAHAMA Design Competition: Iconic Urban Landmarks",
    bigImage: "/assets/news-image.webp",
    smallImage: "/assets/roshn.webp",
    link: "/old-event",
  },
  {
    id: 2,
    date: "Nov 20, 2025",
    title:
      "ROSHN Group Signs MOUs and Agreements Strengthening Construction and Infrastructure Partnerships on the Final Day of Cityscape Global 2025",
    bigImage: "/assets/roshn.webp",
    smallImage: "/assets/news-image.webp",
    link: "/new-event",
  },
];

const NewsSection = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % newsData.length);
      setIsAnimating(false);
    }, 700);
  };

  const handleBack = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
      setIsAnimating(false);
    }, 700);
  };

  const current = newsData[index];
  const next = newsData[(index + 1) % newsData.length];
  const prev = newsData[(index - 1 + newsData.length) % newsData.length];

  return (
    <>
      <section
        className={`mt-10 py-10 ${
          language === "ar" ? "md:pr-10 pr-0" : "md:pl-10 pl-0"
        }`}
      >
        {/* Title Section */}
        <div
          className={`title flex flex-col md:flex-row justify-between items-start gap-5 ${
            language === "ar" ? "pr-10 md:pr-0" : "pl-10 md:pl-0"
          }`}
        >
          <h2 className="text-left text-xl lg:text-2xl font-light uppercase">
            What's New
          </h2>

          <h3
            className="w-[58%] sm:w-[45%] lg:w-[35%] xl:w-[44%] text-4xl md:text-6xl xl:text-7xl font-light"
            style={{ wordSpacing: "8px" }}
          >
            Latest Updates from ROSHN
          </h3>

          <SwappingBtn btnTitle="View All" link="news" />
        </div>

        {/* Main */}
        <div className="mt-20 flex flex-col md:flex-row-reverse gap-10">
          <div
            className="relative md:w-2/3 w-full overflow-hidden cursor-pointer"
            onClick={() => navigate(current.link)}
          >
            <img
              src={current.bigImage}
              className="w-full h-full object-cover"
            />

            {isAnimating && (
              <img
                src={index > 0 ? next.bigImage : prev.bigImage}
                className="w-full h-full object-cover absolute top-0 left-0"
                style={{
                  animation: "slideDown 0.7s ease-out forwards",
                }}
              />
            )}
          </div>

          <div
            className="px-10 md:px-0 lg:w-[500px] md:w-[600px]"
            style={{ wordSpacing: "8px" }}
          >
            <p className="font-light text-[#383731] mb-3">{current.date}</p>
            <h3 className="font-normal text-lg sm:text-xl md:text-4xl lg:w-[80%] w-[100%] mb-8">
              {current.title}
            </h3>

            <div className="w-[320px] h-[220px] hidden md:block relative">
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black/30">
                <img
                  src={current.smallImage}
                  className={`
                    absolute top-0 left-0 w-full h-full object-cover
                    ${
                      isAnimating
                        ? "opacity-0 transition-opacity duration-700"
                        : "opacity-100"
                    }
                    `}
                />

                <img
                  src={index > 0 ? next.smallImage : prev.smallImage}
                  className={`
                    absolute top-0 left-0 w-full h-full object-cover
                    ${
                      isAnimating
                        ? "opacity-100 transition-opacity duration-700"
                        : "opacity-0"
                    }
                    `}
                />
                <Link
                  to={""}
                  className="absolute top-[41%] left-[34%] uppercase text-white py-2 px-8 rounded-full bg-[#006450]"
                  onClick={handleNext}
                >
                  Next
                </Link>
              </div>
            </div>

            <div className="btns flex gap-5 md:hidden">
              <Link
                to={""}
                className="border border-[#E5E7EB] text-[#11100F] p-3 text-2xl rounded-full"
                onClick={handleBack}
              >
                <BsArrowLeft />
              </Link>
              <Link
                to={""}
                className="border border-[#E5E7EB] text-[#11100F] p-3 text-2xl rounded-full"
                onClick={handleNext}
              >
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
