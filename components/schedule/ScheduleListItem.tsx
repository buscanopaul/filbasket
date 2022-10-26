import {
  PresentationChartLineIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ScheduleListItem = (props: Props) => {
  return (
    <div className="relative w-full border-b border-gray-300 grid lg:grid-cols-5 gap-5 items-center justify-items-center py-5">
      {/* time or final */}
      <p className="font-robotoMono text-gray-500 text-sm justify-self-start">
        7:00 PM ET
      </p>
      {/* teams */}
      <div className="flex flex-row items-center w-full relative h-full col-span-1">
        {/* team left */}
        <div className="relative flex flex-col w-full h-full">
          <div className="flex flex-row items-center w-full">
            <div
              style={{
                backgroundImage: `url('https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg')`,
              }}
              className={`w-10 h-10 bg-no-repeat bg-center bg-contain`}
            />
            <h4 className="font-robotoMono text-secondary-color text-sm pl-2">
              Philidelphia
            </h4>
          </div>
          {/* team right */}
          <div className="flex flex-row items-center">
            <div
              style={{
                backgroundImage: `url('https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg')`,
              }}
              className={`w-10 h-10 bg-no-repeat bg-center bg-contain`}
            />
            <h4 className="font-robotoMono text-secondary-color text-sm pl-2">
              Nuggets
            </h4>
          </div>
        </div>
        <div className="relative flex flex-col items-end justify-evenly h-full w-full">
          <p className="font-robotoMono text-secondary-color text-sm">-</p>
          <p className="font-robotoMonoBold text-secondary-color text-sm">-</p>
        </div>
      </div>
      {/* location */}
      <div className="justify-self-start lg:pl-20">
        <p className="font-robotoMono text-gray-500 text-sm">
          Rocket Mortgage FieldHouse
        </p>
        <p className="font-robotoMono text-secondary-color text-sm">
          Cleveland, OH
        </p>
      </div>
      {/* preview or box score */}
      <Link href={`/game-detail/${1}`}>
        <div className="flex flex-row items-center lg:justify-self-end justify-self-start cursor-pointer">
          <PresentationChartLineIcon className="h-5 w-5 text-secondary-color" />
          <p className="font-robotoMonoBold text-secondary-color pl-2">
            Preview
          </p>
        </div>
      </Link>
      {/* tickets or highlights */}
      <Link href={`/ticket/${1}`}>
        <div className="flex flex-row items-center lg:justify-self-end justify-self-start cursor-pointer">
          <TicketIcon className="h-5 w-5 text-secondary-color" />
          <p className="font-robotoMonoBold text-secondary-color pl-2">
            Tickets
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ScheduleListItem;
