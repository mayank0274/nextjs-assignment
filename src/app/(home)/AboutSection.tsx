import React from "react";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f3] flex items-center justify-center p-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-br from-purple-400/40 via-pink-400/30 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="relative w-60 h-[380px] sm:w-72 sm:h-[460px] md:w-80 md:h-[520px] lg:w-[420px] lg:h-[680px] rounded-[9999px] overflow-hidden shadow-2xl border border-white/20">
              <img
                src="/about.png"
                alt="about image"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center h-auto lg:h-[680px] space-y-6 text-center lg:text-left">
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2">
              ABOUT
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-snug">
              CRAFTING UNIQUE
              <br />
              BRAND EXPERIENCES
              <br />
              <span className="text-gray-700">SINCE 2014</span>
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            With a Visual Arts degree, my journey began in graphic design,
            crafting logos and marketing materials. Video editing followed,
            where meticulous attention to detail set my work apart, and I
            ventured into 3D modeling for immersive experiences.
          </p>
          <div>
            <button className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-900 text-gray-900 font-semibold tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-full">
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
