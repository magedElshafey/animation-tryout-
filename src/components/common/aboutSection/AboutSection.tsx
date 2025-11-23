import { GoArrowRight } from "react-icons/go";

const AboutSection = () => {
  return (
    <>
      <section className="relative flex flex-col bg-[#FAFAFA]">
        <h2 className="font-normal uppercase text-xl m-5 text-left w-full">
          About Roshn
        </h2>

        <div className="absolute sm:px-5 md:px-0 left-0 w-full md:w-[42vw] lg:w-[48vw] xl:w-[40vw] h-[60vh] sm:h-[100vh] md:h-[60vh] lg:h-[100vh] translate-y-[45%] sm:translate-y-[30%] md:translate-y-[60%] lg:translate-y-1/2 z-10">
          <img
            src="/assets/about-section-1.webp"
            className="w-full h-full object-cover"
            alt="Left"
          />
        </div>
        <div className="absolute left-5 md:left-auto md:right-0 w-full md:w-[48vw] xl:w-[38vw] lg:h-[90vh] top-[40rem] sm:top-[60rem] md:top-[22rem] lg:top-40 z-10">
          <img
            src="/assets/about-section-2.webp"
            className="w-full h-full object-cover hidden lg:block "
            alt="Right"
          />
          <div className="about my-5 sm:my-10">
            <p className="w-[90%]">
              ROSHN Group is a key enabler of Saudi Vision 2030, transforming
              the urban landscape through human-centric integrated developments
              that elevate connectivity and enhance quality of life across the
              Kingdom.
            </p>
            <div className="btns flex justify-start items-center mt-5 gap-1 group">
              <button className="w-14 h-14 rounded-full bg-[#006450] text-white text-3xl transition-transform duration-1000 group-hover:translate-x-64">
                <GoArrowRight className="ml-3" />
              </button>

              <button className="w-48 h-14 rounded-full bg-[#006450] text-white uppercase text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
            <h1
              className="hidden md:block top-20 left-5 md:left-[30%] text-4xl md:text-7xl lg:text-[5rem] xl:text-8xl font-light leading-tight  z-40 mix-blend-exclusion text-white"
            >
              The Leading
              <br />
              Multi-asset
              <br />
              Class Real-estate
              <br />
              Developer
            </h1>

            <h1 className="block md:hidden absolute top-20 left-5 text-4xl font-light leading-tight">
              The Leading Multi-asset <br />
              Class Real-estate Developer
            </h1>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
