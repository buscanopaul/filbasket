import Link from "next/link";
import React from "react";
import StatsLeaderPlayer from "../../components/stats/StatsLeaderPlayer";
import Title from "../../components/text/Title";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <div className="md:flex items-center justify-between">
        <Title title="Stats Leader - Player" isDark={true} isLeft={true} />
        <Link href={`/stats/player`}>
          <h3 className="font-fiba text-secondary-color underline cursor-pointer">
            See all player stats
          </h3>
        </Link>
      </div>
      <StatsLeaderPlayer isPlayer={true} />
      <div className="flex items-center justify-between">
        <Title title="Stats Leader - Team" isDark={true} isLeft={true} />
        <Link href={`/stats/player`}>
          <h3 className="font-fiba text-secondary-color underline cursor-pointer">
            See all teams stats
          </h3>
        </Link>
      </div>
      <StatsLeaderPlayer isPlayer={false} />
    </div>
  );
};

export default index;
