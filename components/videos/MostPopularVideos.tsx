import React from "react";
import Title from "../text/Title";
import MostPopularVideosItem from "./MostPopularVideosItem";

type Props = {};

const MostPopularVideos = (props: Props) => {
  return (
    <div className="w-full xl:w-1/4">
      <Title title="Most Popular" isDark={true} isLeft={true} />
      <MostPopularVideosItem />
      <MostPopularVideosItem />
      <MostPopularVideosItem />
      <MostPopularVideosItem />
      <MostPopularVideosItem />
      <MostPopularVideosItem />
    </div>
  );
};

export default MostPopularVideos;
