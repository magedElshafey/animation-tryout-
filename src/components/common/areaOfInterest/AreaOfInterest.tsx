import { useState } from "react";
import InterestBlock from "./InterestBlock";
import PanelContent from "./PanelContent";
import "../../../style/index.css";

const interesrts = [
  "Home Buyer",
  "Job Seekrs",
  "Sub-Developer",
  "CSR Partners",
  "Partners",
];

const contentData = [
  {
    title: "Home Buyers",
    text: `ROSHN Group integrated human-centric communities are uniquely
           developed with a wide range of amenities and design options to
           suit all tastes and needs.`,
    img: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/Home_Buyers_8d48ae99a8/Home_Buyers_8d48ae99a8.svg",
    btnTitle: "Find Your Home",
    link: "home",
  },
  {
    title: "Job Seekrs",
    text: `Join one of the best places to work in Saudi Arabia. 
            We are committed to empowering talents to grow their skills 
            and providing them with essential experience to fulfill their career ambitions, 
            in line with our commitment to Vision 2030.`,
    img: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/Job_Seekers_a07f063703/Job_Seekers_a07f063703.svg",
    btnTitle: "Learn More",
    link: "job",
  },
  {
    title: "Sub-Developer",
    text: `Be a partner of success with ROSHN. Through our diverse portfolio, 
            we provide valuable development opportunities for leading sub-developers.`,
    img: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/Sub_Developer_745255eff7/Sub_Developer_745255eff7.svg",
    btnTitle: "Learn More",
    link: "developer",
  },
  {
    title: "CSR Partners",
    text: `As a Corporate Social Responsibility (CSR) leader, ROSHN continues to drive positive, 
        sustainable impact across the kingdom through impactful partnerships.`,
    img: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/CSR_Partners_71d1ce6158/CSR_Partners_71d1ce6158.svg",
    btnTitle: "Learn More",
    link: "csr-partners",
  },
  {
    title: "Partners",
    text: `We are looking to partner with local companies to develop best-in-class 
        communities with first-rate amenities that our customers will be proud to call home.`,
    img: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/Partners_d020f70cb2/Partners_d020f70cb2.svg",
    btnTitle: "Learn More",
    link: "partners",
  },
];

const AreaOfInterest = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleActive = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#FAFAFA] mt-[95vh] sm:mt-[150vh] md:mt-[45vh] lg:mt-[95vh] xl:mt-[92vh] p-10">
      {/* Title Section */}
      <div className="title flex flex-col md:flex-row justify-center gap-5">
        <h2 className="text-left text-xl lg:text-2xl font-light uppercase">
          Connect With Roshn
        </h2>

        <h3
          className="mx-auto w-full md:w-[60%] lg:w-[50%] xl:w-[44%] text-4xl md:text-6xl xl:text-7xl font-light"
          style={{ wordSpacing: "8px" }}
        >
          Select Your Area Of Interest
        </h3>
      </div>

      <div className="interests-content flex flex-col lg:flex-row-reverse justify-between items-center mt-10 gap-5 xl:gap-10">
        {/* Interests Content*/}
        <div className="interests w-full xl:w-[30%] lg:w-[35%] grid grid-cols-2 sm:grid-cols-3 md:flex lg:grid lg:grid-cols-2 gap-5">
          {interesrts.map((interst, index) => (
            <InterestBlock
              key={index}
              name={interst}
              active={activeIndex === index}
              onActive={() => handleActive(index)}
            />
          ))}
        </div>

        {/* Panel Content */}
        <div className="content w-full lg:w-[65%] xl:w-3/4 h-[600px] relative overflow-hidden">
          {contentData.map((item, index) => (
            <PanelContent
              key={index}
              title={item.title}
              text={item.text}
              img={item.img}
              btnTitle={item.btnTitle}
              link={item.link}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfInterest;
