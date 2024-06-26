// HeroSection.jsx

import React from "react";
import "../components/style.css"; // Import your CSS file here

const HeroSection = () => {
  return (
    <section
      id="work"
      className="grid  gap-4 p-4"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="col-span-2 text-5xl md:col-span-1 flex items-center justify-center md:justify-start">
        <div id="name" className="name flex flex-col items-center md:flex-row">
          <p className="jello text-6xl">M</p>
          <p className="jello text-6xl">a</p>
          <p className="jello text-6xl">n</p>
          <p className="jello text-6xl">t</p>
          <p className="jello text-6xl">h</p>
          <p className="jello text-6xl">a</p>
          <p className="jello text-6xl">n</p>

          <p className="jello text-6xl " style={{ marginLeft: "15px" }}>
            K
          </p>
          <p className="jello text-6xl">a</p>
          <p className="jello text-6xl">s</p>
          <p className="jello text-6xl">l</p>
          <p className="jello text-6xl">e</p>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 flex items-center justify-center md:justify-start">
        <p className="jello text-3xl">I</p>
        <p className="jello text-3xl">&nbsp;d</p>
        <p className="jello text-3xl">e</p>
        <p className="jello text-3xl">s</p>
        <p className="jello text-3xl">i</p>
        <p className="jello text-3xl">g</p>
        <p className="jello text-3xl">n</p>
        &nbsp;
        <p className="jello text-3xl">w</p>
        <p className="jello text-3xl">e</p>
        <p className="jello text-3xl">b</p>
        &nbsp;
        <p className="jello text-3xl">a</p>
        <p className="jello text-3xl">n</p>
        <p className="jello text-3xl">d</p>
        &nbsp;
        <p className="jello text-3xl">c</p>
        <p className="jello text-3xl">o</p>
        <p className="jello text-3xl">d</p>
        <p className="jello text-3xl">e</p>
      </div>
    </section>
  );
};

export default HeroSection;
