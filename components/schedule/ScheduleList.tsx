import React from "react";
import StandingsYear from "../standings/StandingsYear";
import StatsPlayerYear from "../stats/StatsPlayerYear";
import Title from "../text/Title";
import ScheduleListItem from "./ScheduleListItem";
import ScheduleListItemFinal from "./ScheduleListItemFinal";
import ScheduleListItemLive from "./ScheduleListItemLive";

type Props = {
  isDark: Boolean;
};

const ScheduleList = (props: Props) => {
  return (
    <div className="relative w-full px-3">
      <div className="flex items-center justify-between">
        <Title
          title="2022 Filbasket - Filipino Basketball League"
          isDark={true}
          isLeft={true}
        />
        <StatsPlayerYear />
      </div>
      <div className="relative flex flex-row items-center justify-between pt-5">
        <h3
          className={`font-fiba text-2xl ${
            props.isDark ? `text-white` : `text-secondary-color`
          }`}
        >
          Monday, October 26
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">1 game</p>
      </div>
      <ScheduleListItemLive isDark={false} />
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
      <ScheduleListItem isDark={false} />
      <ScheduleListItem isDark={false} />
      <div className="relative flex flex-row items-center justify-between pt-10">
        <h3 className="font-fiba text-2xl text-secondary-color">
          Sunday, October 16
        </h3>
        <p className="text-sm font-robotoMono text-gray-500">5 games</p>
      </div>
      <ScheduleListItemFinal isDark={false} />
      <ScheduleListItemFinal isDark={false} />
      <ScheduleListItemFinal isDark={false} />
      <ScheduleListItemFinal isDark={false} />
      <ScheduleListItemFinal isDark={false} />
    </div>
  );
};

export default ScheduleList;
