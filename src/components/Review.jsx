import React from "react";
import CarouselReview from "../components/CarouselReview.jsx";
import Trust from "../assets/client/trustplot.svg";
import Clutch from "../assets/client/clutchreview.svg";
import App from "../assets/client/appstore.svg";

const Review = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full overflow-hidden mt-7 ">
      <div className="flex flex-col gap-3 items-center justify-center my-6 mt-10 ">
        <p className="text-bg2-600 text-md">Review/Feedback</p>
        <h2 className="text-4xl font-semibold">
          Happy Clients With Digital Transformation
        </h2>
      </div>
      
      <div className="flex gap-10 my-5 flex-col ">
        <CarouselReview />
        <div className="flex justify-start gap-25">
          <div className="flex flex-col w-[440px] mx-5">
          <h2>Read More Review On</h2>
          <p>
            Read our client's testimonials all around the web. We deliver
            quality service that loves everyone.
          </p>
        </div>
        <div className="flex gap-10">
          <img
            src={Clutch}
            alt="Clutch client"
            loading="lazy"
            className="w-[193px] h-[60px]"
          />
          <img
            src={Trust}
            alt="Trustplot client"
            loading="lazy"
            className="w-[193px] h-[60px]"
          />
          <img
            src={App}
            alt="App client"
            loading="lazy"
            className="w-[193px] h-[60px]"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
