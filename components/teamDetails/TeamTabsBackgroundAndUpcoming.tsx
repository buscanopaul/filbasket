import React from "react";
import TeamsTabsBackground from "./TeamsTabsBackground";
import TeamsTabsUpcomingSchedule from "./TeamsTabsUpcomingSchedule";

type Props = {};

const TeamTabsBackgroundAndUpcoming = (props: Props) => {
  return (
    <div className="relative grid lg:grid-cols-2 gap-6 mt-7">
      <TeamsTabsBackground />
      <TeamsTabsUpcomingSchedule />
    </div>
  );
};

export default TeamTabsBackgroundAndUpcoming;
