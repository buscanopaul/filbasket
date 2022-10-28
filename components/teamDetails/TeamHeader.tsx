import React from "react";
import bg from "../../styles/images/bg_cover.jpeg";

type Props = {};

const TeamHeader = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="relative flex lg:flex-row flex-col lg:items-start items-center justify-between bg-secondary-color rounded-md md:p-16 p-8 bg-cover bg-no-repeat bg-center"
    >
      <div className="pt-5">
        <h2 className="font-fiba text-white text-5xl">LOS ANGELES LAKERS</h2>
        <div className="flex flex-row items-center pt-5">
          <div className="border-r pr-4 flex flex-col items-center">
            <p className="font-robotoMonoBold text-md text-white">PPG</p>
            <h4 className="font-fiba text-white text-3xl">102.3</h4>
          </div>
          <div className="border-r pr-4 ml-4 flex flex-col items-center">
            <p className="font-robotoMonoBold text-md text-white">RPG</p>
            <h4 className="font-fiba text-white text-3xl">43.3</h4>
          </div>
          <div className="border-r pr-4 ml-4 flex flex-col items-center">
            <p className="font-robotoMonoBold text-md text-white">SPG</p>
            <h4 className="font-fiba text-white text-3xl">24.3</h4>
          </div>
          <div className="ml-4 flex flex-col items-center">
            <p className="font-robotoMonoBold text-md text-white">APG</p>
            <h4 className="font-fiba text-white text-3xl">11.5</h4>
          </div>
        </div>
        <div className="flex flex-row items-center pt-8">
          <p className="font-robotoMono text-white text-2xl">Standing:</p>
          <p className="font-robotoMonoBold text-white text-2xl pl-1">3-2</p>
        </div>
        <div className="flex flex-row items-center pt-5">
          <p className="font-robotoMono text-white text-2xl">Country:</p>
          <p className="font-robotoMonoBold text-white text-2xl pl-1">
            Philippines
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg)`,
        }}
        className={`relative h-80 w-80 bg-cover bg-no-repeat bg-center`}
      />
    </div>
  );
};

export default TeamHeader;
