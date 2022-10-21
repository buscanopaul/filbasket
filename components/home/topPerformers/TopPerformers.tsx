import React from "react";
import Title from "../../text/Title";
import TopPerformersItem from "./TopPerformersItem";

type Props = {};

const TopPerformers = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pt-20">
      <Title title="Top Performers" isDark={true} isLeft={false} />
      <div className="grid xl:grid-cols-3 gap-6 px-3">
        <TopPerformersItem />
        <TopPerformersItem />
        <TopPerformersItem />
      </div>
    </div>
  );
};

export default TopPerformers;
