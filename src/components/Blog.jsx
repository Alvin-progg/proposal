import React from "react";
import { FaEye } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import UI from "../assets/common/uiuxdesign.jpg";
import Marketing from '../assets/common/marketing.jpg'
import App from '../assets/common/app-design.jpg'

const Blog = () => {
  return (
    <section className="w-full my-10 py-10 overflow-hidden bg-bg1-100 px-4 sm:px-6 lg:px-8">
      <div className="flex text-center flex-col gap-5 my-10 mt-15">
        <p className="text-bg2-600 text-lg sm:text-xl">Stay Updated</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">News & blog Updates</h2>
      </div>
      <div className="flex items-center justify-center mx-auto max-lg:flex-col max-lg:max-w-[500px] max-sm:max-w-full w-full max-w-[1296px] border-1 rounded-2xl border-border-200 cursor-pointer my-10">
        <div className="h-auto lg:h-[582px] w-full max-w-[431px] flex-col flex justify-between border-r-0 max-lg:border-b lg:border-r border-border-200">
          <div className="flex justify-between items-center p-4 sm:p-6">
            <h3 className="text-sm sm:text-base">March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p className="text-sm sm:text-base">110</p>
              <FaEye className="text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 px-4 sm:px-5">
            <img src={UI} alt="UI design img" loading="lazy" className="w-full max-w-[380px] h-[200px] sm:h-[250px] object-cover mx-auto rounded-lg" />
            <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight">Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
            <p className="text-textGray-600 text-sm sm:text-base leading-relaxed">
              A design blog by Tom Smile on typography, color, layout, UX, design process.
            </p>
          </div>
          <a href="#" className="flex justify-between items-center p-4 border-t border-border-200">
            <p className="text-sm sm:text-base">Read Article</p>
            <FaLongArrowAltRight className="text-sm sm:text-base" />
          </a>
        </div>
        
        <div className="h-auto lg:h-[582px] w-full max-w-[431px] flex-col flex justify-between border-r-0 max-lg:border-b lg:border-r border-border-200">
          <div className="flex justify-between items-center p-4 sm:p-6">
            <h3 className="text-sm sm:text-base">March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p className="text-sm sm:text-base">110</p>
              <FaEye className="text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 px-4 sm:px-5">
            <img src={Marketing} alt="Marketing design img" loading="lazy" className="w-full max-w-[380px] h-[200px] sm:h-[250px] object-cover mx-auto rounded-lg" />
            <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight">Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
            <p className="text-textGray-600 text-sm sm:text-base leading-relaxed">
              A design blog by Tom Smile on typography, color, layout, UX, design process.
            </p>
          </div>
          <a href="#" className="flex justify-between items-center p-4 border-t border-border-200">
            <p className="text-sm sm:text-base">Read Article</p>
            <FaLongArrowAltRight className="text-sm sm:text-base" />
          </a>
        </div>
        
        <div className="h-auto lg:h-[582px] w-full max-w-[431px] flex-col flex justify-between">
          <div className="flex justify-between items-center p-4 sm:p-6">
            <h3 className="text-sm sm:text-base">March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p className="text-sm sm:text-base">110</p>
              <FaEye className="text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 px-4 sm:px-5">
            <img src={App} alt="App design img" loading="lazy" className="w-full max-w-[380px] h-[200px] sm:h-[250px] object-cover mx-auto rounded-lg" />
            <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight">Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
            <p className="text-textGray-600 text-sm sm:text-base leading-relaxed">
              A design blog by Tom Smile on typography, color, layout, UX, design process.
            </p>
          </div>
          <a href="#" className="flex justify-between items-center p-4 border-t border-border-200">
            <p className="text-sm sm:text-base">Read Article</p>
            <FaLongArrowAltRight className="text-sm sm:text-base" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;