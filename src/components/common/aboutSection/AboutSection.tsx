import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/store/LanguageProvider";
const AboutSection = () => {
  const [isHoverd, setIsHoverd] = useState(false);
  const { language } = useLanguage();
  return (
    <>
      <section className="relative flex flex-col bg-[#FAFAFA]">
        <h2 className="w-full m-5 text-left text-2xl font-light uppercase">
          About Roshn
        </h2>

        <div
          className="
          absolute left-0 z-10 
          w-full md:w-[42vw] lg:w-[48vw] xl:w-[40vw]
          h-[60vh] sm:h-[100vh] md:h-[60vh] lg:h-[100vh]
          translate-y-[45%] sm:translate-y-[30%] md:translate-y-[60%] lg:translate-y-1/2
          sm:px-5 md:px-0
        "
        >
          <img
            src="/assets/about-section-1.webp"
            alt="Left Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="
          absolute z-10 
          left-5 md:left-auto md:right-0 
          w-full md:w-[48vw] xl:w-[38vw] 
          lg:h-[90vh] 
          top-[40rem] sm:top-[60rem] md:top-[22rem] lg:top-40
        "
        >
          <img
            src="/assets/about-section-2.webp"
            alt="Right Image"
            className="hidden h-full w-full object-cover lg:block"
          />

          <div className="about my-5 sm:my-10">
            <p className="w-[90%]">
              ROSHN Group is a key enabler of Saudi Vision 2030, transforming
              the urban landscape through human-centric integrated developments
              that elevate connectivity and enhance quality of life across the
              Kingdom.
            </p>

            <div className="btns group mt-5 flex w-fit items-center gap-1">
              <button
                className="
                h-14 w-14 rounded-full bg-[#006450] text-3xl text-white
                transition-transform duration-500 
                group-hover:translate-x-64
              "
              >
                <GoArrowRight className="ml-3" />
              </button>

              <button className="h-14 w-48 rounded-full bg-[#006450] text-lg uppercase text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <h3
            className="
           left-5 md:left-[30%] top-20 z-40 hidden md:block 
          text-left font-light leading-tight text-white
          text-4xl md:text-7xl lg:text-[5rem] xl:text-8xl
          mix-blend-exclusion
        "
          >
            The Leading
            <br />
            Multi-asset
            <br />
            Class Real-estate
            <br />
            Developer
          </h3>

          <h3
            className="
           left-5 top-20 block md:hidden 
          text-4xl font-light leading-tight
        "
          >
            The Leading Multi-asset <br />
            Class Real-estate Developer
          </h3>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

{
  /* <a
              href="#"
              className="flex items-center gap-1  mt-5 transition-all duration-500 w-fit"
              onMouseEnter={() => setIsHoverd(true)}
              onMouseLeave={() => setIsHoverd(false)}
            >
              <button
                className={`w-14 h-14 rounded-full bg-[#006450] text-white text-3xl ${
                  isHoverd ? "order-2" : "order-1"
                }`}
              >
                <GoArrowRight className="ml-3" />
              </button>
              <span
                className={`w-48 h-14 rounded-full bg-[#006450] text-white uppercase text-lg text-center leading-[3.5rem] ${
                  isHoverd ? "order-1" : "order-2"
                }`}
              >
                Learn More
              </span>
            </a> */
}
