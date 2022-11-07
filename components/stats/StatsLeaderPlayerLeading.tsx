import Link from "next/link";
import React from "react";

type Props = {
  isPlayer: Boolean;
};

const StatsLeaderPlayerLeading = (props: Props) => {
  return (
    <Link href={props.isPlayer ? `/player/${1}` : `/team/${1}`}>
      <div className="flex items-center justify-between bg-gray-100 rounded-md px-5 py-3 cursor-pointer">
        <div>
          <h3 className="font-fiba text-2xl text-secondary-color">
            36.0 - Points Per Game
          </h3>
          <p className="font-robotoMono pt-3">1. Luka Doncic</p>
        </div>
        <div
          style={{
            backgroundImage: `url(https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg)`,
          }}
          className={`relative h-12 w-12 bg-cover bg-no-repeat bg-center rounded-full bg-primary-color`}
        />
      </div>
    </Link>
  );
};

export default StatsLeaderPlayerLeading;
