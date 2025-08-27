import React from "react";
import CarouselReview from "../components/CarouselReview.jsx";
import Trust from "../assets/client/trustplot.svg";
import Clutch from "../assets/client/clutchreview.svg";
import App from "../assets/client/appstore.svg";

const Review = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
      <div className="flex flex-col gap-3 items-center justify-center my-6 sm:my-8 lg:my-10 text-center">
        <p className="text-bg2-600 text-sm sm:text-base lg:text-lg">Review/Feedback</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold max-w-3xl mx-4 sm:mx-6">
          Happy Clients With Digital Transformation
        </h2>
      </div>
      
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 my-5 sm:my-6 lg:my-8 w-full max-w-7xl">
        <CarouselReview />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
          <div className="flex flex-col w-full lg:w-[400px] xl:w-[440px] px-4 sm:px-5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Read More Review On</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
              Read our client's testimonials all around the web. We deliver
              quality service that loves everyone.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            <img
              src={Clutch}
              alt="Clutch client"
              loading="lazy"
              className="w-[120px] h-[40px] sm:w-[150px] sm:h-[48px] lg:w-[193px] lg:h-[60px] object-contain"
            />
            <img
              src={Trust}
              alt="Trustplot client"
              loading="lazy"
              className="w-[120px] h-[40px] sm:w-[150px] sm:h-[48px] lg:w-[193px] lg:h-[60px] object-contain"
            />
            <img
              src={App}
              alt="App client"
              loading="lazy"
              className="w-[120px] h-[40px] sm:w-[150px] sm:h-[48px] lg:w-[193px] lg:h-[60px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;