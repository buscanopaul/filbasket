import React from "react";
import StatsTeams from "../../components/stats/StatsTeams";

type Props = {};

const team = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10">
      <StatsTeams />
    </div>
  );
};

export default team;
