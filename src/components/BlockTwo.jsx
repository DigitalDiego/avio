import React from "react";

export default function BlockTwo() {
  return (
    <div className="p-[5vw] flex justify-center items-center gap-8 flex-col 2xl:max-w-7xl 2xl:mx-auto">
      <p className="text-4xl font-bold">How it works</p>
      <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="w-full lg:w-1/4 flex justify-center items-center gap-4 flex-col">
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-contain lg:object-cover 2xl:object-contain"
              src="/public/survey.svg"
              alt="survey"
            />
          </div>
          <p className="text-center">
            Take the survey to determine your preferences
          </p>
        </div>
        <div className="w-full lg:w-1/4 flex justify-center items-center gap-4 flex-col">
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-contain lg:object-cover 2xl:object-contain"
              src="/public/calculator.svg"
              alt="calculator"
            />
          </div>
          <p className="text-center">
            Calculate how much it is you want to spend on your trip
          </p>
        </div>
        <div className="w-full lg:w-1/4 flex justify-center items-center gap-4 flex-col">
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-contain lg:object-cover 2xl:object-contain"
              src="/public/processing.svg"
              alt="computer processing data"
            />
          </div>
          <p className="text-center">
            We will take the information and match you with bundles that meet
            the criteria
          </p>
        </div>
      </div>
    </div>
  );
}
