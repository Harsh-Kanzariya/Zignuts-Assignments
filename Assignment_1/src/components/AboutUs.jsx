import React from "react";
import asset1 from "../assets/about us 1.png";
import asset2 from "../assets/Enagagement icon 1.png";
import asset3 from "../assets/coomunication icon 1.png";

const AboutUs = () => {
  return (
    <>
      <div className="illu4 absolute w-[612px] h-[408px] top-[1074px] left-[120px]">
        <img
          src={asset1}
          alt="about-us illustration"
          className="object-cover"
        />
      </div>

      <div className="about-us-content absolute w-[658px] h-[475px] top-[983px] left-[812px]">
        <div className="container-1 h-[214px]">
          <div className="heading-about-us">
            <h1
              className="font-rubik font-medium text-[56px] leading-[66.36px]"
              id="about-us"
            >
              ABOUT US
            </h1>
          </div>

          <div className="underline-design">
            <div className="absolute top-[59px]">
              <svg
                width="156"
                height="7"
                viewBox="0 0 156 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="156" height="7" rx="3.5" fill="#A9A9A9" />
              </svg>
            </div>
            <div className="absolute top-[63px]">
              <svg
                width="238"
                height="1"
                viewBox="0 0 238 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="238" y2="0.5" stroke="#A9A9A9" />
              </svg>
            </div>
          </div>

          <div className="content-about-us absolute top-[83px]">
            <p className="font-rubik font-normal text-[18px] leading-[26.55px] text-[#2C2C2C]">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>

        <div className="container-2 absolute w-[619px] h-[221px] top-[254px] flex flex-wrap gap-16">
          <div className="left-part flex flex-col flex-1">
            <img
              src={asset2}
              alt="Enagagement-icon"
              className="max-w-[40px] max-h-[41px] mb-5"
            />
            <h2 className="font-rubik font-medium text-[24px] leading-[28.44px] mb-4">
              Engagement
            </h2>
            <p className="font-rubik font-normal text-[18px] leading-[26.55px] text-[#2C2C2C]">
              We are engagement specialists, who have led projects at all levels
              of the IAP2 spectrum. READ MORE
            </p>
          </div>

          <div className="right-part flex flex-col flex-1">
            <img
              src={asset3}
              alt="Communication-icon"
              className="max-w-[43px] max-h-[41px] mb-5"
            />
            <h2 className="font-rubik font-medium text-[24px] leading-[28.44px] mb-4">
              Communications
            </h2>
            <p className="font-rubik font-normal text-[18px] leading-[26.55px] text-[#2C2C2C]">
              We are award-winning leaders in communications and campaign
              management. READ MORE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
