import React from "react";
import { FaEye } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import UI from "../assets/common/uiuxdesign.jpg";

const Blog = () => {
  return (
    <section>
      <div className="flex text-center flex-col">
        <p>Stay Updated</p>
        <h2>News & blog Updates</h2>
      </div>
      <div className="h-[582px] w-[431px]">
        <div>
          <div className="flex justify-between ">
            <h3>March 7, 2022</h3>
            <div className="flex items-center justify-center">
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
