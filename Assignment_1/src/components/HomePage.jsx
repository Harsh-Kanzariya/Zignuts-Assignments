import React from "react";
import asset1 from "../assets/Asset 1.png";
import asset2 from "../assets/logo-1 1.png";
import asset3 from "../assets/Asset 2.png";
import asset4 from "../assets/Assets 3.png";
import asset5 from "../assets/Graphic 1 2.png";
import asset6 from "../assets/Vector Smart Object21 1.png";
import asset7 from "../assets/Assets 4.png";

const HomePage = () => {
  return (
    <>
      <header className="flex">
        <div className="illu1 w-[119px] h-[111px]">
          <img src={asset1} alt="left-illustration" />
        </div>

        <div className="logo absolute top-[10px] left-[130px] w-[295px] h-[85px]">
          <img src={asset2} alt="logo" />
        </div>

        <nav className="navbar absolute w-[472px] h-[21px] top-[42px] left-[998px] z-10">
          <ul className="flex justify-between items-center font-roboto text-[18px] leading-[21.09px]">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="illu2 absolute w-[282px] h-[376px] top-[-14px] left-[1318px]">
          <img src={asset3} alt="right-illustration" className="object-cover" />
        </div>
      </header>

      <div className="w-[1403px] h-[789.19px] overflow-hidden">
        <img
          src={asset4}
          alt="bottom-img-1"
          className="absolute w-[266px] max-h-[580px] top-[325px] left-[-29px] object-cover"
        />
        <img
          src={asset5}
          alt="bottom-img-2"
          className="-z-10 absolute w-[1403px] h-[789.19px] top-[116px] left-[-6px] object-cover"
        />
        <img
          src={asset6}
          alt="vector-img"
          className="absolute w-[643.63px] h-[438.44px] top-[466.75px] left-[142.19px] object-cover"
        />

        <div className="heading absolute w-[459px] h-[198px] top-[277px] left-[926px]">
          <h1 className="font-rubik font-medium text-[56px] leading-[66.36px]">
            Mendleson Communication and Engagement
          </h1>
        </div>

        <div className="content absolute w-[544px] h-[67px] top-[500px] left-[926px]">
          <p className="font-rubik font-normal text-[18px] leading-[21.33px] text-[#2C2C2C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            sed ipsum, ut quam volutpat, tortor.
          </p>
        </div>
      </div>

      <div className="illu3 absolute w-[174px] h-[249px] top-[645px] left-[1426px]">
        <img src={asset7} alt="bottom-img-3" className="object-cover" />
      </div>
    </>
  );
};

export default HomePage;
