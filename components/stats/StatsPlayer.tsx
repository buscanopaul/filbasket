import React from "react";
import LargeTitle from "../text/LargeTitle";
import StatsPlayerItem from "./StatsPlayerItem";
import StatsPlayerYear from "./StatsPlayerYear";

type Props = {};

const StatsPlayer = (props: Props) => {
  return (
    <div className="relative w-full">
      <LargeTitle title="Player Stats" isDark={true} isLeft={true} />
      <div className="flex flex-row items-center justify-between">
        <h4 className="font-fiba text-2xl text-secondary-color mb-5">
          2022 Filbasket - Filipino Basketball League
        </h4>
        <StatsPlayerYear />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table-auto relative w-full">
          <thead>
            <tr className="font-robotoMonoBold text-secondary-color border-y text-right">
              <th className="md:w-32 sticky left-0 py-3 pl-2 bg-white xl:border-none border-r border-gray-200 text-left">
                Player
              </th>
              <th className="px-2 text-left">TEAM</th>
              <th className="px-2">AGE</th>
              <th className="px-2">GP</th>
              <th className="px-2">W</th>
              <th className="px-2">L</th>
              <th className="px-2">MIN</th>
              <th className="px-2">PTS</th>
              <th className="px-2">FGM</th>
              <th className="px-2">FGA</th>
              <th className="px-2">FG%</th>
              <th className="px-2">3PM</th>
              <th className="px-2">3PA</th>
              <th className="px-2">3P%</th>
              <th className="px-2">FTM</th>
              <th className="px-2">FTA</th>
              <th className="px-2">FT%</th>
              <th className="px-2">OREB</th>
              <th className="px-2">DREB</th>
              <th className="px-2">REB</th>
              <th className="px-2">AST</th>
              <th className="px-2">TOV</th>
              <th className="px-2">STL</th>
              <th className="px-2">BLK</th>
              <th className="px-2">PF</th>
              <th className="px-2">FP</th>
              <th className="px-2">+/-</th>
            </tr>
          </thead>
          <tbody className="text-secondary-color">
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
            <StatsPlayerItem />
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center pt-6">
        <span className="text-sm text-gray-400 font-robotoMono mb-2">
          Showing
          <span className="text-gray-900 font-robotoMonoBold px-1">1</span>
          to
          <span className="font-robotoMonoBold text-gray-900 px-1">10</span>
          of
          <span className="font-robotoMonoBold text-gray-900 px-1">100</span>
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="py-2 px-4 text-sm font-medium text-white bg-secondary-color rounded-l hover:bg-primary-color font-robotoMonoBold">
            Prev
          </button>
          <button className="py-2 px-4 text-sm font-medium text-white bg-secondary-color rounded-r hover:bg-primary-color font-robotoMonoBold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsPlayer;
