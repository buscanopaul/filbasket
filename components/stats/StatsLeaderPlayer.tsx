import React from "react";
import StatsLeaderPlayerItem from "./StatsLeaderPlayerItem";
import StatsLeaderPlayerLeading from "./StatsLeaderPlayerLeading";

type Props = {
  isPlayer: Boolean;
};

const StatsLeaderPlayer = (props: Props) => {
  return (
    <div className="relative grid xl:grid-cols-3 gap-6 mb-10">
      <StatsLeaderPlayerItem isPlayer={props.isPlayer} />
      <StatsLeaderPlayerItem isPlayer={props.isPlayer} />
      <StatsLeaderPlayerItem isPlayer={props.isPlayer} />
      <StatsLeaderPlayerItem isPlayer={props.isPlayer} />
      <StatsLeaderPlayerItem isPlayer={props.isPlayer} />
    </div>
  );
};

export default StatsLeaderPlayer;
