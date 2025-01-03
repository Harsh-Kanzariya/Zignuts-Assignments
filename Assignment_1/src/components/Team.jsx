import React from "react";
import asset1 from "../assets/Person 1 img 1.png";
import asset2 from "../assets/Person 2 img 1.png";
import asset3 from "../assets/Person 3 img 1.png";
import asset4 from "../assets/Asset 8 3.png";

const Team = () => {
  return (
    <>
      <div
        className="team-heading absolute top-[3840px] left-[685px]"
        id="team"
      >
        <h1 className="font-rubik font-medium text-[48px] leading-[56.88px]">
          OUR TEAM
        </h1>
      </div>

      <div className="underline-design3 absolute top-[3899px] left-[685px]">
        <div className="">
          <svg
            width="101"
            height="7"
            viewBox="0 0 101 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="101" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        </div>
        <div className="absolute top-1">
          <svg
            width="241"
            height="1"
            viewBox="0 0 241 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="241" y2="0.5" stroke="#A9A9A9" />
          </svg>
        </div>
      </div>

      <div className="container absolute w-[1110px] h-[300px] top-[3936px] left-[244px] flex justify-between text-center">
        <div className="member1">
          <img
            src={asset1}
            alt="Person-1"
            className="mb-14"
          />
          <p className="font-rubik font-normal text-[22px] leading-[26.07px]">
            Jessica D’suza
          </p>
        </div>
        <div className="member2">
          <img
            src={asset2}
            alt="Person-2"
            className="mb-14"
          />
          <p className="font-rubik font-normal text-[22px] leading-[26.07px]">
            Johny Williams
          </p>
        </div>
        <div className="member3">
          <img
            src={asset3}
            alt="Person-3"
            className="mb-14"
          />
          <p className="font-rubik font-normal text-[22px] leading-[26.07px]">
            Sanya R,
          </p>
        </div>
      </div>

      <div className="illu8 absolute w-[220px] h-[476.12px] top-[4047px] left-[1363.23px] -rotate-[4.76] overflow-hidden">
        <img
          src={asset4}
          alt="illustration"
          className="object-contain"
        />
      </div>
    </>
  );
};

export default Team;
