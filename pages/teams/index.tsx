import React from "react";
import TeamsItem from "../../components/teams/TeamsItem";
import LargeTitle from "../../components/text/LargeTitle";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <LargeTitle title="Teams" isDark={true} isLeft={true} />
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
