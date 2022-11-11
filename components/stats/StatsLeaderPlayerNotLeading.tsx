import Link from "next/link";
import React from "react";

type Props = {
  isPlayer: Boolean;
};

const StatsLeaderPlayerNotLeading = (props: Props) => {
  return (
    <div className="relative flex items-center justify-between px-5 py-3">
      <div className="flex font-robotoMono text-secondary-color">
        <p className="pr-2">2.</p>
        <Link href={props.isPlayer ? `/player/${1}` : `/teams/${1}`}>
          <p className="pr-4 hover:underline cursor-pointer">
            Giannis Antetokounmpo
          </p>
        </Link>
        {props.isPlayer && <p className="text-gray-400">MIL</p>}
      </div>
      <h4 className="font-robotoMonoBold text-lg text-secondary-color">32.6</h4>
    </div>
  );
};

export default StatsLeaderPlayerNotLeading;
