import React from "react";
import "./service.css";
const Services = () => {
  return (
    <div
      className="bg-slate-300 mt-[20px]  relative max-w-[auto] min-h-[50vh] p-4"
      name="service"
    >
      <p className="service text-center font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
        Trending collections
      </p>

      <div className="flex xs:flex-col 2xl:flex-row xs:text-center 2xl:text-left items-center mx-auto justify-center gap-[50px] mt-[20px]">
        <div>
          <img
            src="https://i.seadn.io/gae/KEMA5Dgcw4w9VBBcpLYYe575qB61M8gvf6xqZFCGcEq4eLQ-lkLSVSJoIe9lN0QIOTGKyiVwJcP0vxA2wpZc_ZmZdSfTXJnttWogxA?auto=format&dpr=1&w=384"
            className="max-w-[300px]"
            alt="bordeApe"
          />
        </div>
        <div>
          <p className="text-2xl font-medium BoredApe">Bored Ape</p>
          <div className="max-width-[40rem]">
            <p className="text-[16px] ">
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs— unique digital collectibles living on the Ethereum
              blockchain. Your Bored Ape doubles as your Yacht Club membership
              card, and grants access to members-only benefits, the first of
              which is access to THE BATHROOM, a collaborative graffiti board.
              Future areas and perks can be unlocked by the community through
              roadmap activation
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xl font-bold text-center">NFTs</p>
        <div className="flex 2xl:flex-row xs:flex-col items-center mt-4 md:flex-row md:flex xl:flex-row xl:flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col max-w-[auto] min-h-[400px] p-4 bg-white rounded">
            <img
              src="https://i.seadn.io/gae/mxK0kT0xDumah3bHh_M_TlfswdDYghiluOOeYlmKY3RJK7OH2jXVmQfRu6zb-hy_wsiV4fAYaiBSFJsla2YONzDlQobIiCLSbZISMQ?auto=format&dpr=1&w=384"
              className="max-w-[300px]"
              alt="bordeApe"
            />
            <p>9088</p>
            <p>48eth</p>
            <p className="text-slate-500">Last Sale: 68 Eth </p>
          </div>

          <div className="flex flex-col max-w-[auto] min-h-[400px] p-4 bg-white rounded">
            <img
              src="https://i.seadn.io/gcs/files/88db70f960bb99e450cdc9bb44d4b9ac.png?auto=format&dpr=1&w=384"
              className="max-w-[300px]"
              alt="bordeApe"
            />
            <p>9088</p>
            <p>48eth</p>
            <p className="text-slate-500">Last Sale: 68 Eth </p>
          </div>
          
          <div className="flex flex-col max-w-[auto] min-h-[400px] p-4 bg-white rounded">
            <img
              src="https://i.seadn.io/gae/eKBnw-SzmppT0rIdNxjM1Nul4h1sWqDLdOwiTmzfbkKyIO9bh8miYmaVhWocZsnUig4Ecc-C5l4p2vnS_1U5DVmC5CeYeyUfAl8fOw?auto=format&dpr=1&w=384"
              className="max-w-[300px]"
              alt="bordeApe"
            />
            <p>9088</p>
            <p>48eth</p>
            <p className="text-slate-500">Last Sale: 68 Eth </p>
          </div>

          <div className="flex flex-col max-w-[auto] min-h-[400px] p-4 bg-white rounded">
            <img
              src="https://i.seadn.io/gae/Pih5aPxisWA-cNz007yIBR4D2vm-UQY7TfnKQIIkG-dSzUisbZhBkHnRQWQipAtRi-KAPdXFfr2cZ4UvCj6hGD1naus3YFNvTtQDxw?auto=format&dpr=1&w=384"
              className="max-w-[300px]"
              alt="bordeApe"
            />
            <p>9088</p>
            <p>48eth</p>
            <p className="text-slate-500">Last Sale: 68 Eth </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Services;
