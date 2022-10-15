import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { TicketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {}

const ScoresCarouselItem: NextPage<Props> = (props: Props) => {
  return (
    <Link href="/game-details">
      <div className="bg-yellow-500 rounded-md p-3 w-52 mx-1 cursor-pointer hover:bg-secondary-color group transition">
        {/* time and final */}
        <div className="flex flex-row items-start justify-between">
          {/* <h3 className="font-robotoMonoBold text-xs text-secondary-color group-hover:text-white">
          NOV 7 @ 2:00 AM
        </h3> */}
          {/* final */}
          <h3 className="font-robotoMonoBold text-xs text-secondary-color group-hover:text-white">
            OCT 6
          </h3>
          <h3 className="font-robotoMonoBold text-xs text-secondary-color group-hover:text-white">
            FINAL
          </h3>
        </div>
        {/* teams */}
        <div className="flex flex-row items-center justify-between pt-1">
          {/* team names */}
          <div>
            <div className="flex flex-row items-center">
              <Image
                src="https://static.www.nfl.com/league/api/clubs/logos/BAL.svg"
                width={24}
                height={24}
              />
              <h3 className="font-robotoMonoBold text-sm pl-1 text-secondary-color group-hover:text-white">
                MAINE
              </h3>
            </div>
            <div className="flex flex-row items-center">
              <Image
                src="https://static.www.nfl.com/league/api/clubs/logos/TB.svg"
                width={24}
                height={24}
              />
              <h3 className="font-robotoMonoBold text-sm pl-1 text-secondary-colo group-hover:text-white">
                IOWA
              </h3>
            </div>
          </div>
          {/* buy tickets or scores */}
          {/* <Link href="/tickets">
            <div className="flex flex-row items-center border rounded-full px-2 py-1 border-secondary-color group-hover:bg-white transition">
              <h3 className="font-robotoMonoBold text-xs text-secondary-color pr-1">
                TICKETS
              </h3>
              <TicketIcon className="h-4 w-4 text-secondary-color" />
            </div>
          </Link> */}
          {/* scores */}
          <div className="flex flex-col items-end">
            <h3 className="font-robotoMonoBold text-sm text-secondary-color group-hover:text-white">
              12
            </h3>
            <h3 className="font-robotoMonoBold text-sm text-secondary-color group-hover:text-white">
              56
            </h3>
          </div>
        </div>
        {/* live or not */}
        {/* <h3 className="font-robotoMonoBold text-xs text-red-600 pt-1">LIVE</h3> */}
      </div>
    </Link>
  );
};

export default ScoresCarouselItem;
