import React from "react";
import StatsPlayer from "../../components/stats/StatsPlayer";

type Props = {};

const player = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10">
      <StatsPlayer />
    </div>
  );
};

export default player;
