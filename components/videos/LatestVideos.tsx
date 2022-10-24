import React from "react";
import Title from "../text/Title";
import LatestVideosItem from "./LatestVideosItem";

type Props = {};

const LatestVideos = (props: Props) => {
  return (
    <div className="relative xl:w-3/4 xl:pr-12 w-full">
      <Title title="Latest Videos" isDark={true} isLeft={true} />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
      </div>
    </div>
  );
};

export default LatestVideos;
