import React from "react";
import GameHeaderTimeline from "./GameHeaderTimeline";

type Props = {};

const GameHeaderScore = (props: Props) => {
  return (
    <div className="relative justify-around items-center flex flex-col">
      <div className="relative flex flex-row items-center justify-center w-full">
        <div>
          <h4 className="text-white font-robotoMono text-center">Final</h4>
          <div className="">
            <div className="flex flex-row items-center justify-center text-white font-fiba text-3xl">
              <p className="px-2">Q1</p>
              <p className="px-2">10:00</p>
            </div>
          </div>
        </div>
      </div>
      <GameHeaderTimeline />
    </div>
  );
};

export default GameHeaderScore;
