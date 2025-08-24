import React from "react";
import { FaEye } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import UI from "../assets/common/uiuxdesign.jpg";
import Marketing from '../assets/common/marketing.jpg'
import App from '../assets/common/app-design.jpg'

const Blog = () => {
  return (
    <section className="w-full h-screen mt-10 ">
      <div className="flex text-center flex-col">
        <p>Stay Updated</p>
        <h2>News & blog Updates</h2>
      </div>
      <div className=" flex items-center justify-center mx-auto p-4 w-[1296px] border-1 rounded-2xl border-border-200 ">
        <div className="h-[582px] w-[431px] flex-col flex justify-between px-5 border-r border-border-200   ">
          <div className="flex justify-between items-center mt-5 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <img src={UI} alt="UI design img" loading="lazy" className="  w-[380px] h-[250px]" />
          <h3>Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
          <p>
            A design blog by Tom Smile on typography, color, layout, UX, design process.
          </p>
          <div className="flex justify-between">
            <p>Read Article</p>
            <a href="#">
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
        <div className="h-[582px] w-[431px] flex-col flex justify-between px-5 border-r border-border-200  ">
          <div className="flex justify-between mt-5 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <img src={UI} alt="UI design img" loading="lazy" className="  w-[380px] h-[250px]" />
          <h3>Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
          <p>
            A design blog by Tom Smile on typography, color, layout, UX, design process.
          </p>
          <div className="flex justify-between">
            <p>Read Article</p>
            <a href="#">
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
        <div className="h-[582px] w-[431px] flex-col flex justify-between px-5   ">
          <div className="flex justify-between mt-5 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <img src={UI} alt="UI design img" loading="lazy" className="  w-[380px] h-[250px]" />
          <h3>Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
          <p>
            A design blog by Tom Smile on typography, color, layout, UX, design process.
          </p>
          <div className="flex justify-between">
            <p>Read Article</p>
            <a href="#">
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;