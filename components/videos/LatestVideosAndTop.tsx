import React from "react";
import Title from "../text/Title";
import LatestVideos from "./LatestVideos";
import LatestVideosItem from "./LatestVideosItem";
import MostPopularVideos from "./MostPopularVideos";

type Props = {};

const LatestVideosAndTop = (props: Props) => {
  return (
    <div className="flex xl:flex-row flex-col justify-between relative">
      {/* latest videos */}
      <LatestVideos />
      {/* most popular videos */}
      <MostPopularVideos />
    </div>
  );
};

export default LatestVideosAndTop;
