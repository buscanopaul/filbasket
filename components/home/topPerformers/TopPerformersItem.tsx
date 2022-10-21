import Image from "next/image";
import React from "react";
import styles from "./TopPerformersItem.module.css";

type Props = {};

const TopPerformersItem = (props: Props) => {
  return (
    <div className="rounded-lg shadow-lg bg-primary-color relative xl:p-12 p-9 transition-all duration-500 ease-in-out transform">
      {/* team logo and player photo */}
      <div className="relative flex flex-row items-start justify-between">
        {/* team logo */}
        <div className="bg-secondary-color rounded-full w-12 h-12 p-1 relative">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1280px-Los_Angeles_Lakers_logo.svg.png"
            width={52}
            height={52}
            objectFit="contain"
          />
        </div>
        {/* player photo */}
        <div className="bg-secondary-color xl:h-48 xl:w-60 h-32 w-44 relative rounded-md bg-[url('https://the-post-assets.sgp1.digitaloceanspaces.com/2021/10/Untitled-design-28.jpg')]">
          <Image
            className={`${styles.playerPhoto}`}
            src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629639.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      {/* team name */}
      <div className="relative xl:pt-10 pt-6">
        <span className="text-secondary-color font-robotoMono">
          Toronto Raptors
        </span>
      </div>
      {/* player name, stats */}
      <div className="relative flex flex-row justify-between pt-4">
        <div>
          <h2 className="text-secondary-color font-fiba xl:text-6xl lg:text-5xl text-4xl">
            MICHAEL
          </h2>
          <h2 className="text-secondary-color font-fiba xl:text-6xl lg:text-5xl text-4xl">
            JUICO
          </h2>
        </div>
        <div className="border border-secondary-color rounded-md flex flex-col items-center h-full px-3 py-2">
          <span className="text-secondary-color font-robotoMono text-sm leading-3">
            PPG
          </span>
          <h4 className="text-secondary-color font-fiba text-2xl">23.5</h4>
        </div>
      </div>
      {/* position, game played */}
      <div className="relative flex flex-row items-center justify-between font-robotoMono xl:pt-20 pt-10">
        <span>Forward</span>
        <span>Game Played: 36</span>
      </div>
    </div>
  );
};

export default TopPerformersItem;
