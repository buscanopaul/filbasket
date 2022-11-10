import React from "react";
import TeamsTabsUpcomingScheduleItem from "./TeamsTabsUpcomingScheduleItem";

type Props = {};

const TeamsTabsUpcomingSchedule = (props: Props) => {
  return (
    <div className="h-full relative bg-secondary-color rounded-md p-4">
      <h3 className="font-fiba text-2xl text-white">Upcoming Games</h3>
      <TeamsTabsUpcomingScheduleItem />
      <TeamsTabsUpcomingScheduleItem />
    </div>
  );
};

export default TeamsTabsUpcomingSchedule;
