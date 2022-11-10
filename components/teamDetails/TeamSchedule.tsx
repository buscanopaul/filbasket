import React from "react";
import ScheduleListItem from "../schedule/ScheduleListItem";
import ScheduleListItemFinal from "../schedule/ScheduleListItemFinal";
import ScheduleListItemLive from "../schedule/ScheduleListItemLive";

type Props = {
  isDark: Boolean;
};

const TeamSchedule = (props: Props) => {
  return (
    <div className="relative w-full px-3">
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3
          className={`font-fiba text-2xl ${
            props.isDark ? `text-white` : `text-secondary-color`
          }`}
        >
          Monday, October 26
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">1 game</p>
      </div>
      <ScheduleListItemLive isDark={true} />
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3
          className={`font-fiba text-2xl ${
            props.isDark ? `text-white` : `text-secondary-color`
          }`}
        >
          Monday, October 17
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">2 games</p>
      </div>
      <ScheduleListItem isDark={true} />
      <ScheduleListItem isDark={true} />
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3
          className={`font-fiba text-2xl ${
            props.isDark ? `text-white` : `text-secondary-color`
          }`}
        >
          Sunday, October 16
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">5 games</p>
      </div>
      <ScheduleListItemFinal isDark={true} />
      <ScheduleListItemFinal isDark={true} />
      <ScheduleListItemFinal isDark={true} />
      <ScheduleListItemFinal isDark={true} />
      <ScheduleListItemFinal isDark={true} />
    </div>
  );
};

export default TeamSchedule;
