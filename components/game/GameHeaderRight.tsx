import React from "react";

type Props = {};

const GameHeaderRight = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url(https://cdn.nba.com/logos/nba/1610612766/global/D/logo.svg)`,
        }}
        className={`relative h-40 w-40 bg-cover bg-no-repeat bg-center text-center`}
      />
      <h3 className="text-white font-fiba text-xl pt-5">
        EA7 Emporio Armani Milan
      </h3>
    </div>
  );
};

export default GameHeaderRight;
