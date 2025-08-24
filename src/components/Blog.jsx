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
      <div className="h-[582px] w-[431px] flex items-center justify-center mx-auto p-4 ">
        <div className="flex flex-col items-center p-5">
          <div className="flex justify-between items-center gap-15 my-5 ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center gap-1.5">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <img src={UI} alt="UI design img" loading="lazy" />
          <h3>Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
          <p>
            A Design Blog by Tom Smile on Typography,Color,Layout,UX,Design
            Process
          </p>
          <div className="flex justify-between items-center mx-auto">
            <p>Read Article</p>
            <a href="#">
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-between ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <img src={Marketing} alt="UI design img" loading="lazy" />
          <h3>Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
          <p>
            A Design Blog by Tom Smile on Typography,Color,Layout,UX,Design
            Process
          </p>
          <div className="flex justify-between">
            <p>Read Article</p>
            <a href="#">
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-between ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center">
              <p>110</p>
              <FaEye />
            </div>
          </div>
          <img src={App} alt="UI design img" loading="lazy" />
          <h3>Free UI/UX Design Tutorial & Tools: The Learn UI Design Blog</h3>
          <p>
            A Design Blog by Tom Smile on Typography,Color,Layout,UX,Design
            Process
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
