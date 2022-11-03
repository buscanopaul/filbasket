import React from "react";
import TeamStatsItem from "./TeamStatsItem";
import TeamTabsRosterItem from "./TeamTabsRosterItem";

type Props = {};

const TeamStats = (props: Props) => {
  return (
    <div className="w-full relative pt-10 overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="text-left text-secondary-color font-fiba text-lg bg-primary-color rounded-md">
          <tr>
            <th className="md:w-52 left-0 sticky bg-primary-color md:border-none border-r pl-1">
              PLAYER
            </th>
            <th className="py-3 px-8">#</th>
            <th className="py-3 px-8">GP</th>
            <th className="py-3 px-8">MIN</th>
            <th className="py-3 px-8">PTS</th>
            <th className="py-3 px-8">FGM</th>
            <th className="py-3 px-8">FGA</th>
            <th className="py-3 px-8">FG%</th>
            <th className="py-3 px-8">3PM</th>
            <th className="py-3 px-8">3PA</th>
            <th className="py-3 px-8">3P%</th>
            <th className="py-3 px-8">FTM</th>
            <th className="py-3 px-8">FT%</th>
            <th className="py-3 px-8">OREB</th>
            <th className="py-3 px-8">DREB</th>
            <th className="py-3 px-8">REB</th>
            <th className="py-3 px-8">AST</th>
            <th className="py-3 px-8">STL</th>
            <th className="py-3 px-8">BLK</th>
            <th className="py-3 px-8">TOV</th>
            <th className="py-3 px-8">EFF</th>
          </tr>
        </thead>
        <tbody>
          <TeamStatsItem />
          <TeamStatsItem />
          <TeamStatsItem />
          <TeamStatsItem />
          <TeamStatsItem />
          <TeamStatsItem />
        </tbody>
      </table>
    </div>
  );
};

export default TeamStats;
