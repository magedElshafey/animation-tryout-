import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainBtn from "@/components/common/buttons/MainBtn";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const centerY = useTransform(scrollY, [0, 400], [0, 150]);

  const transition = { duration: 0.9, ease: "easeOut" as const };

  return (
    <section className="min-h-screen w-screen overflow-hidden bg-[#012C29] text-white">
      <div className="mt-48 mb-12 w-full h-[40vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        >
          <div>
            <p className="uppercase text-center tracking-[0.25em] text-xs md:text-sm text-teal-200">
              The National Champion of Destination Real Estate
            </p>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-center"
            >
              Building the Difference
            </motion.h1>
            <motion.div
              style={{ y: centerY }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.25 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="w-60 h-60 rounded-full border border-teal-300/60 flex items-center justify-center shadow-[0_0_40px_rgba(45,255,200,0.35)]">
                <div className="w-40 h-40 rounded-full border border-teal-300/60 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-teal-300/80" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="px-6 md:px-12 flex items-center justify-between">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-900/40 aspect-[4/3]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1),_rgba(0,0,0,0.8))]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <span className="text-xs tracking-[0.25em] uppercase text-teal-100">
              WATCH
            </span>

            <div className="flex items-end justify-end">
              <button className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
                <span className="ml-1 text-2xl text-slate-900">▶</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-base text-center md:text-lg text-teal-100 max-w-md">
            Shaping Immersive Places, Elevating People, Inspiring Life.
          </p>

          <MainBtn text="learn more" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/**
 *  <section className="min-h-screen bg-[#012C29] text-white flex items-center justify-center px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
      >
        <div>
          <p className="uppercase text-center tracking-[0.25em] text-xs md:text-sm text-teal-200">
            The National Champion of Destination Real Estate
          </p>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-center"
          >
            Building the Difference
          </motion.h1>
          <motion.div
            style={{ y: centerY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.25 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-60 h-60 rounded-full border border-teal-300/60 flex items-center justify-center shadow-[0_0_40px_rgba(45,255,200,0.35)]">
              <div className="w-40 h-40 rounded-full border border-teal-300/60 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-teal-300/80" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-900/40 aspect-[4/3]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1),_rgba(0,0,0,0.8))]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="text-xs tracking-[0.25em] uppercase text-teal-100">
            WATCH
          </span>

          <div className="flex items-end justify-end">
            <button className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
              <span className="ml-1 text-2xl text-slate-900">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
 */
