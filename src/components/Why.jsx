import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import Analyz from '../assets/icons/analyz.png';
import Unique from '../assets/icons/idea.png';
import Opt from '../assets/icons/optimization.png';
import Techni from '../assets/icons/technical-support.png';

const Why = () => {
  return (
    <section className="w-full overflow-hidden h-auto flex justify-center  items-center bg-bg1-50">
      <div className="flex flex-col mt-8 mx-auto  max-sm:items-center justify-center max-sm:mx-5">
        <div className="items-start flex flex-col gap-5">
        <p className="text-bg2-600 flex gap-1.5   font-light">
          <AiOutlineMinus className="text-lg sm:text-xl md:text-2xl max-sm:text-2xl" /> 
          Why Blueket?
        </p>
        <h2 className="text-4xl font-semibold max-lg:text-3xl">Why Choose Blueket For Web Development?</h2>
      </div>
      <div className="flex items-center justify-center gap-8 my-10 max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid max-md:grid-cols-1 max-md:mx-auto max-md:grid-rows-1">
        <div className="w-[300px] h-[295px] flex flex-col p-6 gap-2 rounded-2xl drop-shadow-2xl bg-bg ">
          <img src={Analyz} alt="analyze" loading="lazy" className="h-[52px] w-[52px] " />
          <h3 className="text-2xl font-semibold">Analyze project</h3>
          <p className="font-light">
            We prioritise studying your project, brand, status, and future
            goals. The first goal will be to locate your competitors.
          </p>
        </div>
        <div className="w-[300px] h-[295px] flex flex-col p-6 gap-2 rounded-2xl drop-shadow-2xl bg-bg ">
          <img src={Unique} alt="unique ideas" loading="lazy"className="h-[52px] w-[52px]"/>
          <h3 className="text-2xl font-semibold">Unique Ideas</h3>
          <p className="font-light">
            We prioritise studying your project, brand, status, and future
            goals. The first goal will be to locate your competitors.
          </p>
        </div>
        <div className="w-[300px] h-[295px] flex flex-col p-6 gap-2 rounded-2xl drop-shadow-2xl bg-bg ">
          <img src={Opt} alt="optimize" loading="lazy"className="h-[52px] w-[52px]" />
          <h3 className="text-2xl font-semibold">Optimization</h3>
          <p className="font-light">
            We prioritise studying your project, brand, status, and future
            goals. The first goal will be to locate your competitors.
          </p>
        </div>
        <div className="w-[300px] h-[295px] flex flex-col p-6 gap-2 rounded-2xl drop-shadow-2xl bg-bg ">
          <img src={Techni} alt="technical support" loading="lazy"className="h-[52px] w-[52px]" />
          <h3 className="text-2xl font-semibold">Support</h3>
          <p className="font-light">
            We prioritise studying your project, brand, status, and future
            goals. The first goal will be to locate your competitors.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Why;
