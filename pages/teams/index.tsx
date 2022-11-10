import React from "react";
import StatsPlayerYear from "../../components/stats/StatsPlayerYear";
import TeamsItem from "../../components/teams/TeamsItem";
import LargeTitle from "../../components/text/LargeTitle";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 relative">
      <LargeTitle title="Teams" isDark={true} isLeft={true} />
      <div className="flex flex-row items-center justify-between">
        <h4 className="font-fiba text-2xl text-secondary-color mb-5">
          2022 Filbasket - Filipino Basketball League
        </h4>
        <StatsPlayerYear />
      </div>
      <div className="grid xl:grid-cols-3 gap-6">
        <TeamsItem />
        <TeamsItem />
        <TeamsItem />
        <TeamsItem />
        <TeamsItem />
        <TeamsItem />
      </div>
    </div>
  );
};

export default index;
