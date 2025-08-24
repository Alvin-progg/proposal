import React from "react";
import { FaEye } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import UI from "../assets/common/uiuxdesign.jpg";
import Marketing from '../assets/common/marketing.jpg'
import App from '../assets/common/app-design.jpg'

const Blog = () => {
  return (
    <section className="w-full  mt-10 overflow-hidden">
      <div className="flex text-center flex-col gap-5 my-10 mt-15">
        <p className="text-bg2-600 text-xl">Stay Updated</p>
        <h2 className="text-4xl font-semibold">News & blog Updates</h2>
      </div>
      <div className=" flex items-center justify-center mx-auto  w-[1296px] border-1 rounded-2xl border-border-200 cursor-pointer ">
        <div className="h-[582px] w-[431px] flex-col flex justify-between  border-r border-border-200   ">
          <div className="flex justify-between items-center  p-6 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5 ">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <div className="flex flex-col gap-5 px-5">
            <img src={UI} alt="UI design img" loading="lazy" className="  w-[380px] h-[250px]" />
            <h3 className="text-2xl">Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
            <p className="text-textGray-600">
              A design blog by Tom Smile on typography, color, layout, UX, design process.
            </p>
          </div>
          <a href="#" className="flex justify-between items-center p-4 border-t border-border-200   ">
            <p className="">Read Article</p>
            <FaLongArrowAltRight />
          </a>
        </div>
        <div className="h-[582px] w-[431px] flex-col flex justify-between  border-r border-border-200   ">
          <div className="flex justify-between items-center  p-6 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5 ">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <div className="flex flex-col gap-5 px-5">
            <img src={Marketing} alt="UI design img" loading="lazy" className="  w-[380px] h-[250px]" />
            <h3 className="text-2xl">Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
            <p className="text-textGray-600">
              A design blog by Tom Smile on typography, color, layout, UX, design process.
            </p>
          </div>
          <a href="#" className="flex justify-between items-center p-4 border-t border-border-200   ">
            <p className="">Read Article</p>
            <FaLongArrowAltRight />
          </a>
        </div>
        <div className="h-[582px] w-[431px] flex-col flex justify-between    ">
          <div className="flex justify-between items-center  p-6 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5 ">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <div className="flex flex-col gap-5 px-5">
            <img src={App} alt="UI design img" loading="lazy" className="  w-[380px] h-[250px]" />
            <h3 className="text-2xl">Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
            <p className="text-textGray-600">
              A design blog by Tom Smile on typography, color, layout, UX, design process.
            </p>
          </div>
          <a href="#" className="flex justify-between items-center p-4 border-t border-border-200   ">
            <p className="">Read Article</p>
            <FaLongArrowAltRight  />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;