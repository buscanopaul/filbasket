import React from "react";
import RecommendedVideosItem from "./RecommendedVideosItem";

type Props = {};

const RecommendedVideos = (props: Props) => {
  return (
    <div className="relative">
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
      <RecommendedVideosItem />
    </div>
  );
};

export default RecommendedVideos;
