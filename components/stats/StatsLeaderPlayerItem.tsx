import React from "react";
import StatsLeaderPlayerLeading from "./StatsLeaderPlayerLeading";
import StatsLeaderPlayerNotLeading from "./StatsLeaderPlayerNotLeading";

type Props = {
  isPlayer: Boolean;
};

const StatsLeaderPlayerItem = (props: Props) => {
  return (
    <div className="relative mt-5">
      <StatsLeaderPlayerLeading isPlayer={props.isPlayer} />
      <StatsLeaderPlayerNotLeading isPlayer={props.isPlayer} />
      <StatsLeaderPlayerNotLeading isPlayer={props.isPlayer} />
      <StatsLeaderPlayerNotLeading isPlayer={props.isPlayer} />
      <StatsLeaderPlayerNotLeading isPlayer={props.isPlayer} />
    </div>
  );
};

export default StatsLeaderPlayerItem;
