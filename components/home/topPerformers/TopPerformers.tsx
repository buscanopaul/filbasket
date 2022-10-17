import React from "react";
import TopPerformersItem from "./TopPerformersItem";

type Props = {};

const TopPerformers = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pt-20">
      <h2 className={`text-center font-fiba text-4xl pb-10`}>Top Performers</h2>
      <div className="grid xl:grid-cols-3 gap-6 px-3">
        <TopPerformersItem />
        <TopPerformersItem />
        <TopPerformersItem />
      </div>
    </div>
  );
};

export default TopPerformers;
