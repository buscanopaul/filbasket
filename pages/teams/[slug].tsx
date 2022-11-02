import React from "react";
import TeamHeader from "../../components/teamDetails/TeamHeader";
import TeamTabs from "../../components/teamDetails/TeamTabs";

type Props = {};

const Teams = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <TeamHeader />
      <TeamTabs />
    </div>
  );
};

export default Teams;
