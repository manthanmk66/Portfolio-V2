import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import "../components/css/HeroStyle.css";
import { IconCloud } from "./iconcloud";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
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

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <section
            id="work"
            className="grid gap-4 p-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="col-span-3 font-semibold font-custom text-2xl md:text-3xl md:col-span-2 flex items-center justify-center md:justify-start">
              <p className="jello text-lg md:text-2xl">N</p>
              <p className="jello text-lg md:text-2xl">a</p>
              <p className="jello text-lg md:text-2xl">m</p>
              <p className="jello text-lg md:text-2xl">a</p>
              <p className="jello text-lg md:text-2xl">s</p>
              <p className="jello text-lg md:text-2xl">t</p>
              <p className="jello text-lg md:text-2xl">e</p>
              <p className="jello text-lg md:text-2xl">(</p>
              <p className="jello text-lg md:text-2xl">)</p>
              <p className="jello text-lg md:text-2xl">;</p>
              &nbsp;
              <p className="jello text-lg md:text-2xl">I</p>
              <p className="jello text-lg md:text-2xl">'</p>
              <p className="jello text-lg md:text-2xl">m</p>
            </div>

            <div className="font-custom col-span-2 text-4xl  md:col-span-1 flex items-center justify-center md:text-2xl md:justify-start">
              <div id="name" className="name flex items-center  md:flex-row">
                <p className="jello text-4xl md:text-7xl">M</p>
                <p className="jello text-4xl md:text-7xl">a</p>
                <p className="jello text-4xl md:text-7xl">n</p>
                <p className="jello text-4xl md:text-7xl">t</p>
                <p className="jello text-4xl md:text-7xl">h</p>
                <p className="jello text-4xl md:text-7xl">a</p>
                <p className="jello text-4xl md:text-7xl">n</p>

                <p
                  className="jello text-4xl md:text-7xl"
                  style={{ marginLeft: "15px" }}
                >
                  K
                </p>
                <p className="jello text-4xl md:text-7xl">a</p>
                <p className="jello text-4xl md:text-7xl">s</p>
                <p className="jello text-4xl md:text-7xl">l</p>
                <p className="jello text-4xl md:text-7xl">e</p>
              </div>
            </div>

            <div className=" font-clashregular col-span-3 md:col-span-2 font-semibold flex items-center justify-center md:justify-start">
              <p className="jello text-3xl md:text-6xl">C</p>
              <p className="jello text-3xl md:text-6xl">r</p>
              <p className="jello text-3xl md:text-6xl">e</p>
              <p className="jello text-3xl md:text-6xl">a</p>
              <p className="jello text-3xl md:text-6xl">t</p>
              <p className="jello text-3xl md:text-6xl">i</p>
              <p className="jello text-3xl md:text-6xl">n</p>
              <p className="jello text-3xl md:text-6xl">g</p>
              <p className="jello text-3xl md:text-6xl">&nbsp;</p>
              <p className="jello text-3xl md:text-6xl">&</p>
              <p className="jello text-3xl md:text-6xl">&nbsp;</p>
              <p className="jello text-3xl md:text-6xl">C</p>
              <p className="jello text-3xl md:text-6xl">o</p>
              <p className="jello text-3xl md:text-6xl">d</p>
              <p className="jello text-3xl md:text-6xl">i</p>
              <p className="jello text-3xl md:text-6xl">n</p>
              <p className="jello text-3xl md:text-6xl">g</p>
              <p className="jello text-3xl md:text-6xl">&nbsp;</p>
              <p className="jello text-3xl md:text-6xl">D</p>
              <p className="jello text-3xl md:text-6xl">i</p>
              <p className="jello text-3xl md:text-6xl">g</p>
              <p className="jello text-3xl md:text-6xl">i</p>
              <p className="jello text-3xl md:text-6xl">t</p>
              <p className="jello text-3xl md:text-6xl">a</p>
              <p className="jello text-3xl md:text-6xl">l</p>
              <p className="jello text-3xl md:text-6xl">&nbsp;</p>
            </div>

            <div className=" font-clashregular col-span-3 md:col-span-2 font-semibold flex items-center  justify-start">
              <p className="jello text-3xl md:text-6xl">S</p>
              <p className="jello text-3xl md:text-6xl">o</p>
              <p className="jello text-3xl md:text-6xl">l</p>
              <p className="jello text-3xl md:text-6xl">u</p>
              <p className="jello text-3xl md:text-6xl">t</p>
              <p className="jello text-3xl md:text-6xl">i</p>
              <p className="jello text-3xl md:text-6xl">o</p>
              <p className="jello text-3xl md:text-6xl">n</p>
              <p className="jello text-3xl md:text-6xl">s</p>
              <p className="jello text-3xl md:text-6xl">.</p>
            </div>
          </section>

          {/* "Show my work" button */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Social media icons container */}
          <div className="flex flex-col items-center mt-8">
            {/* Social media icons */}
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <IconCloud />
        </div>
      </div>
    </div>
  );
};

export default Hero;
