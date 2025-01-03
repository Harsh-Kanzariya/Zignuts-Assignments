import React from "react";
import asset1 from "../assets/facebook 1.png";
import asset2 from "../assets/linkedin 1.png";
import asset3 from "../assets/Group 20.png";

const ContactUs = () => {
  return (
    <>
      <footer
        className="absolute w-[1340px] h-[208px] top-[5769px] left-[130px] bg-[#BFDBFF] flex justify-center items-center"
        id="contact"
      >
        <div className="w-[1115px] h-[125px] flex justify-between">
          <div className="item1">
            <h3 className="font-rubik font-bold text-[16px] leading-[35.36px]">
              Social
            </h3>
            <p className="font-rubik font-normal text-[14px] leading-[30.94px] text-[#2C2C2C]">
              <img
                src={asset1}
                alt="facebook-logo"
                className="inline relative -left-4"
              />
              Facebook
              <br />
              <img
                src={asset2}
                alt="linkedin-logo"
                className="inline relative -left-4"
              />
              LinkedIn
              <br />
              <img
                src={asset3}
                alt="google-logo"
                className="inline relative -left-4"
              />
              Google +
            </p>
          </div>
          <div className="item2">
            <h3 className="font-rubik font-bold text-[16px] leading-[35.36px]">
              Explore
            </h3>
            <p className="font-rubik font-normal text-[14px] leading-[30.94px] text-[#2C2C2C]">
              Services
              <br />
              Team
              <br />
              Clients
            </p>
          </div>
          <div className="item3">
            <h3 className="font-rubik font-bold text-[16px] leading-[35.36px]">
              Contact
            </h3>
            <p className="font-rubik font-normal text-[14px] leading-[30.94px] text-[#2C2C2C]">
              Lorem Ipsum dummy address
              <br />
              used for display
              <br />
              1234567890
            </p>
          </div>
          <div className="item4">
            <h3 className="font-rubik font-bold text-[16px] leading-[35.36px]">
              Email
            </h3>
            <p className="font-rubik font-normal text-[14px] leading-[30.94px] text-[#2C2C2C]">
              mendlesoncommunication@email.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
