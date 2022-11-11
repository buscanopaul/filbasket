import React from "react";
import bg from "../../styles/images/bg_cover.jpeg";
import GameHeaderLeft from "./GameHeaderLeft";
import GameHeaderLeftScore from "./GameHeaderLeftScore";
import GameHeaderRight from "./GameHeaderRight";
import GameHeaderRightScore from "./GameHeaderRightScore";
import GameHeaderScore from "./GameHeaderScore";

type Props = {};

const GameHeader = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="relative bg-secondary-color rounded-md md:p-12 p-8 bg-cover bg-no-repeat bg-center grid lg:grid-cols-3 grid-cols-1 gap-10"
    >
      <div className="flex flex-row items-center justify-between">
        <GameHeaderLeft />
        <GameHeaderLeftScore />
      </div>
      <GameHeaderScore />
      <div className="flex lg:flex-row flex-row-reverse items-center justify-between">
        <GameHeaderRightScore />
        <GameHeaderRight />
      </div>
    </div>
  );
};

export default GameHeader;
