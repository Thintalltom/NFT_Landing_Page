import React from "react";
import "./about.css";
const About = () => {
  return (
    <div
      name="about"
      className="itscreen bg-slate-200 relative text-center justify-center z-10  items-center flex"
    >
      <div className=" max-width-[70rem] p-[10px]">
        <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          NFT MarketPlace
        </p>
        <p className="text-center break-all">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        <button
          className="text-center mt-2 border-2  p-2 text-xl font-bold 
        bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 min-width-[100px] rounded-full"
        >
          Join us now
        </button>
      </div>
      <div class="custom-shape-divider-bottom-1685312267">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
