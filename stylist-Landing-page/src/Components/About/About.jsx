import React from "react";
import "./about.css";
const About = () => {
  return (
    <div
      name="about"
      className="  text-center bg-gradient-to-r xs:h-screen  from-cyan-500 to-blue-200 w-full h-screen flex-col flex items-center justify-center content-center"
    >
      <div className="items-center w-full ">
        <h1 className="2xl:font-extrabold xs:text-4xl xs:font-extrabold 2xl:text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          NFT Marketplace
        </h1>
        <p className="2xl:font-extrabold xs:font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-6  xs:text-xs">
          Sea place is a market place for monero tokens, launched in 2023 from a
          team of decentralised <br />
          across the world, we are the biggest marketplace out there.. Buy your
          first NFT right <br />
          now by connecting your wallet with each wallet.
        </p>
        <button className="mt-4 border-none bg-clip-border text-transparent bg-gradient-to-r from-pink-500 to-violet-500  border-2 p-4 cursor-pointer rounded-full 2xl:w-64 text-white  border-blue-700  xs:w-32 xs:text-sm">
          Join us Now
        </button>
      </div>
     
      <svg className=" absolute 2xl:mt-[450px] xs:mt-[700px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L17.1,176C34.3,160,69,128,103,122.7C137.1,117,171,139,206,149.3C240,160,274,160,309,
      138.7C342.9,117,377,75,411,96C445.7,117,480,203,514,245.3C548.6,288,583,288,617,250.7C651.4,
      213,686,139,720,138.7C754.3,139,789,213,823,218.7C857.1,224,891,160,926,160C960,160,994,224,
      1029,218.7C1062.9,213,1097,139,1131,106.7C1165.7,75,1200,85,1234,80C1268.6,75,1303,53,1337,
      64C1371.4,75,1406,117,1423,138.7L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,
      320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,
      320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,
      514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,
      320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
          ></path>
        </svg>
   
    
    </div>
  );
};

export default About;
