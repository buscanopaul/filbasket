import React from "react";

type Props = {};

const GameHeaderLeft = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url(https://cdn.nba.com/logos/nba/1610612748/global/D/logo.svg)`,
        }}
        className={`relative h-40 w-40 bg-cover bg-no-repeat bg-center`}
      />
      <h3 className="text-white font-fiba text-xl">Virtus Segafredo Bologna</h3>
    </div>
  );
};

export default GameHeaderLeft;
