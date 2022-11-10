import {
  PresentationChartLineIcon,
  PresentationChartBarIcon,
  PlayCircleIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  isDark: Boolean;
};

const ScheduleListItemLive = (props: Props) => {
  return (
    <div className="relative w-full border-b border-gray-300 grid lg:grid-cols-5 gap-5 items-center justify-items-center py-5">
      {/* time or final */}
      <Link href={`/game/${1}/#box`}>
        <p className="font-robotoMono text-red-500 text-sm justify-self-start cursor-pointer">
          LIVE
        </p>
      </Link>
      {/* teams */}
      <div className="flex flex-row items-center w-full relative h-full col-span-1">
        {/* team left */}
        <div className="relative flex flex-col w-full h-full">
          <Link href={`/teams/${1}`}>
            <div className="flex flex-row items-center w-full cursor-pointer">
              <div
                style={{
                  backgroundImage: `url('https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg')`,
                }}
                className={`w-10 h-10 bg-no-repeat bg-center bg-contain`}
              />
              <h4
                className={`font-robotoMono hover:underline ${
                  props.isDark ? `text-white` : `text-secondary-color`
                } text-sm pl-2`}
              >
                Hawks
              </h4>
            </div>
          </Link>
          {/* team right */}
          <Link href={`/teams/${1}`}>
            <div className="flex flex-row items-center cursor-pointer">
              <div
                style={{
                  backgroundImage: `url('https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg')`,
                }}
                className={`w-10 h-10 bg-no-repeat bg-center bg-contain`}
              />
              <h4
                className={`font-robotoMono hover:underline ${
                  props.isDark ? `text-white` : `text-secondary-color`
                } text-sm pl-2`}
              >
                Heat
              </h4>
            </div>
          </Link>
        </div>
        <div className="relative flex flex-col items-end justify-evenly h-full w-full">
          <p
            className={`font-robotoMono ${
              props.isDark ? `text-white` : `text-secondary-color`
            } text-sm`}
          >
            1
          </p>
          <p
            className={`font-robotoMono ${
              props.isDark ? `text-white` : `text-secondary-color`
            } text-sm`}
          >
            6
          </p>
        </div>
      </div>
      {/* location */}
      <div className="justify-self-start lg:pl-20">
        <p className="font-robotoMono text-gray-500 text-sm">
          Little Caesars Arena
        </p>
        <p
          className={`font-robotoMono ${
            props.isDark ? `text-white` : `text-secondary-color`
          } text-sm`}
        >
          Detroit, MI
        </p>
      </div>
      {/* preview or box score */}
      <Link href={`/game/${1}/#live`}>
        <div className="flex flex-row items-center lg:justify-self-end justify-self-start cursor-pointer">
          <PresentationChartBarIcon className="h-5 w-5 text-red-500" />
          <p className="font-robotoMonoBold text-red-500 pl-2">Live Stats</p>
        </div>
      </Link>
      {/* tickets or highlights */}
      <Link href={`/game/${1}/#live`}>
        <div className="flex flex-row items-center lg:justify-self-end justify-self-start cursor-pointer">
          <PlayCircleIcon className="h-5 w-5 text-red-500" />
          <p className="font-robotoMonoBold text-red-500 pl-2">Watch</p>
        </div>
      </Link>
    </div>
  );
};

export default ScheduleListItemLive;
