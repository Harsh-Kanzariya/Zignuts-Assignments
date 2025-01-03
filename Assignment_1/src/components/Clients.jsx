import React from "react";
import asset1 from "../assets/Assets 9 1.png";
import asset2 from "../assets/Layer 19.png";
import asset3 from "../assets/Layer 20.png";
import asset4 from "../assets/1280px-Brigitte-Logo.png";
import asset5 from "../assets/Layer 22.png";
import asset6 from "../assets/BHP_2017_logo.png";
import asset7 from "../assets/Layer 21.png";
import asset8 from "../assets/Layer 23.png";
import asset9 from "../assets/Layer 24.png";
import asset10 from "../assets/MelbourneWaterLogo-1024x282.png";

const Clients = () => {

  return (
    <>
      <div className="illu9 absolute w-[179px] h-[404px] top-[5176px] left-[-26px]">
        <img src={asset1} alt="illustration" />
      </div>

      <div
        className="client-heading absolute top-[5242px] left-[645px]"
        id="clients"
      >
        <h1 className="font-rubik font-medium text-[48px] leading-[56.88px]">
          OUR CLIENTS
        </h1>
      </div>

      <div className="underline-design5 absolute top-[5301px] left-[645px]">
        <div className="">
          <svg
            width="104"
            height="7"
            viewBox="0 0 104 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="104" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        </div>
        <div className="absolute top-1">
          <svg
            width="310"
            height="1"
            viewBox="0 0 310 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="310" y2="0.5" stroke="#A9A9A9" />
          </svg>
        </div>
      </div>

      <div className="container absolute w-[1112px] h-[346px] top-[5348px] left-[233px] flex flex-col justify-between">
        <div className="upperpart flex justify-between">
          <img
            src={asset2}
            alt="logo1"
            className="object-contain"
          />
          <img
            src={asset3}
            alt="logo2"
            className="object-contain"
          />
          <img
            src={asset4}
            alt="logo3"
            className="object-contain"
          />
          <img
            src={asset5}
            alt="logo4"
            className="object-contain"
          />
          <img
            src={asset6}
            alt="logo5"
            className="object-contain"
          />
        </div>

        <div className="lowerpart flex justify-between">
          <img
            src={asset7}
            alt="logo6"
            className="object-contain"
          />
          <img
            src={asset8}
            alt="logo7"
            className="object-contain"
          />
          <img
            src={asset9}
            alt="logo8"
            className="object-contain"
          />
          <img
            src={asset10}
            alt="logo9"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Clients;
