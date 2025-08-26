import React from "react";
import CarouselTech from "./CarouselTech";
const Tech = () => {
  return (
    <section className="w-full h-[611px] mt-13 bg-bg1-100 overflow-hidden  justify-center  flex">
      <div className="rounded-b-full h-[250px] w-[500px] bg-blue-700 absolute max-sm:h-[280px] max-sm:hidden "></div>
      <div className="z-10 flex-col flex justify-center items-center   ">
        <div className="z-10 flex flex-col text-center h-[256px] w-[880px] gap-5">
          <h2 className="text-4xl font-semibold py-3">Our Workplace Technologies</h2>
          <h3 className="text-2xl">
            Our Workplace Technologies" section of the Human Resources
            Department's website.
          </h3>
          <p className="text-textGray-600  font-light">
            Our Workplace Technologies Center is focused on working with
            business leaders to help them maximize their productivity, reduce
            costs and meet social needs in the 21st century. Our Workplace
            Technologies Center is focused on working with business leaders to
            help them maximize their productivity, reduce costs and meet social
            needs in the 21st century.
          </p>
        </div>
        <CarouselTech  />
        <div className="h-[85px] w-[170px] bg-bg2-600 rounded-t-full -mb-26 "></div>
      </div>
    </section>
  );
};

export default Tech;
