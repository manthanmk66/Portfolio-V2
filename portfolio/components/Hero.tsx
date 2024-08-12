import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import "../components/css/HeroStyle.css";
import { IconCloud } from "./iconcloud";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <section
            id="work"
            className="grid gap-4 p-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="col-span-3 font-semibold text-3xl md:col-span-2 flex items-center justify-center md:justify-start">
              <p className="jello text-2xl">N</p>
              <p className="jello text-2xl">a</p>
              <p className="jello text-2xl">m</p>
              <p className="jello text-2xl">a</p>
              <p className="jello text-2xl">s</p>
              <p className="jello text-2xl">t</p>
              <p className="jello text-2xl">e</p>
              <p className="jello text-2xl">(</p>
              <p className="jello text-2xl">)</p>
              <p className="jello text-2xl">;</p>
              &nbsp;
              <p className="jello text-2xl">I</p>
              <p className="jello text-2xl">&apos;</p>
              <p className="jello text-2xl">m</p>
            </div>

            <div className="col-span-2 text-5xl md:col-span-1 flex items-center justify-center md:justify-start">
              <div
                id="name"
                className="name flex flex-col items-center md:flex-row"
              >
                <p className="jello text-7xl">M</p>
                <p className="jello text-7xl">a</p>
                <p className="jello text-7xl">n</p>
                <p className="jello text-7xl">t</p>
                <p className="jello text-7xl">h</p>
                <p className="jello text-7xl">a</p>
                <p className="jello text-7xl">n</p>

                <p className="jello text-7xl " style={{ marginLeft: "15px" }}>
                  K
                </p>
                <p className="jello text-7xl">a</p>
                <p className="jello text-7xl">s</p>
                <p className="jello text-7xl">l</p>
                <p className="jello text-7xl">e</p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 font-semibold flex items-center justify-center md:justify-start">
              <p className="jello text-7xl">I</p>
              <p className="jello text-7xl">&nbsp;d</p>
              <p className="jello text-7xl">e</p>
              <p className="jello text-7xl">s</p>
              <p className="jello text-7xl">i</p>
              <p className="jello text-7xl">g</p>
              <p className="jello text-7xl">n</p>
              <p className="jello text-7xl">&nbsp;&</p>
              <p className="jello text-7xl">&nbsp;C</p>
              <p className="jello text-7xl">o</p>
              <p className="jello text-7xl">d</p>
              <p className="jello text-7xl">e</p>
              <p className="jello text-7xl">&nbsp;f</p>
              <p className="jello text-7xl">o</p>
              <p className="jello text-7xl">r</p>

              <p className="jello text-7xl">&nbsp;W</p>
              <p className="jello text-7xl">e</p>
              <p className="jello text-7xl">b</p>
            </div>
          </section>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="">
          <IconCloud />
        </div>
      </div>
    </div>
  );
};

export default Hero;
