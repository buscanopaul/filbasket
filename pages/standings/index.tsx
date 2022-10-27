import React from "react";
import StandingsTable from "../../components/standings/StandingsTable";
import LargeTitle from "../../components/text/LargeTitle";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 w-full relative">
      <LargeTitle title="Standings" isDark={true} isLeft={true} />
      <StandingsTable />
    </div>
  );
};

export default index;
