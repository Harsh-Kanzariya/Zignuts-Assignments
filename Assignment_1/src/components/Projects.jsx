import React from 'react';
import asset1 from "../assets/Our Project_ 1 img 1.png";
import asset2 from "../assets/Our Project _ 2 img 1.png";
import asset3 from "../assets/Our Project_ 3 img 1.png";


const Projects = () => {
    return (
    <>
        <div className="projects-heading absolute top-[4356px] left-[674px]">
            <h1 className="font-rubik font-medium text-[48px] leading-[56.88px]">OUR PROJECTS</h1>
        </div>

        <div className="underline-design4 absolute top-[4413px] left-[674px]">
            <div className="">
                <svg width="103" height="7" viewBox="0 0 103 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="103" height="7" rx="3.5" fill="#A9A9A9" />
                </svg>
            </div>
            <div className="absolute top-1">
                <svg width="362" height="1" viewBox="0 0 362 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="362" y2="0.5" stroke="#A9A9A9" />
                </svg>
            </div>
        </div>

        <div className="container absolute w-[1130px] h-[667px] top-[4447px] left-[235px] flex gap-5">
            <div>
                <img src={asset1} alt="project-img1" />
            </div>
            <div>
                <img src={asset2} alt="project-img2" className="mb-5" />
                <img src={asset3} alt="project-img3" />
            </div>
        </div>

    </>
    );
}

export default Projects;
