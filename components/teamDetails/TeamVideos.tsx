import React from "react";
import Title from "../text/Title";
import LatestVideosItem from "../videos/LatestVideosItem";

type Props = {};

const TeamVideos = (props: Props) => {
  return (
    <div className="relative pt-10">
      <Title title="Latest Videos" isDark={true} isLeft={true} />
      <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-6">
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
        <LatestVideosItem />
      </div>
    </div>
  );
};

export default TeamVideos;
