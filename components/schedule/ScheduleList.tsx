import React from "react";
import ScheduleListItem from "./ScheduleListItem";
import ScheduleListItemFinal from "./ScheduleListItemFinal";
import ScheduleListItemLive from "./ScheduleListItemLive";

type Props = {};

const ScheduleList = (props: Props) => {
  return (
    <div className="relative w-full px-3">
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3 className="font-fiba text-2xl text-secondary-color">
          Monday, October 26
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">1 game</p>
      </div>
      <ScheduleListItemLive />
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3 className="font-fiba text-2xl text-secondary-color">
          Monday, October 17
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">2 games</p>
      </div>
      <ScheduleListItem />
      <ScheduleListItem />
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3 className="font-fiba text-2xl text-secondary-color">
          Sunday, October 16
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">5 games</p>
      </div>
      <ScheduleListItemFinal />
      <ScheduleListItemFinal />
      <ScheduleListItemFinal />
      <ScheduleListItemFinal />
      <ScheduleListItemFinal />
    </div>
  );
};

export default ScheduleList;
