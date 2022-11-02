import { PlayCircleIcon, TicketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = {};

const TeamsTabsUpcomingScheduleItem = (props: Props) => {
  return (
    <div className="relative mt-10 cursor-pointer flex items-center justify-between hover:bg-primary-color transition group">
      <Link href="/">
        <div>
          <p className="text-white font-robotoMono text-sm group-hover:text-secondary-color">
            11-05-2022
          </p>
          <h4 className="text-white font-robotoMonoBold group-hover:text-secondary-color">
            Windy City Bulls @
          </h4>
          <h4 className="text-white font-robotoMonoBold group-hover:text-secondary-color">
            Winconsin Herd
          </h4>
        </div>
      </Link>
      <div className="w-1/2 relative">
        <a
          href="https://google.com"
          className="group-hover:text-white group-hover:bg-secondary-color bg-primary-color p-3 px-4 w-44 rounded-full flex items-center flex-row font-robotoMonoBold text-secondary-color relative hover:bg-secondary-color transition"
        >
          <p>Buy Tickets</p>
          <TicketIcon className="ml-3 h-5 w-5 text-secondary-color group-hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default TeamsTabsUpcomingScheduleItem;
