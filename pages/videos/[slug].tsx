import React from "react";
import RecommendedVideos from "../../components/videoDetail/RecommendedVideos";
import VideoDetail from "../../components/videoDetail/VideoDetail";

type Props = {};

const Videos = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto relative px-3 md:pt-14">
      <div className="flex xl:flex-row flex-col">
        {/* main youtube video player */}
        <div className="xl:w-3/4 xl:pr-10 w-full relative">
          <VideoDetail />
        </div>
        {/* recommended videos */}
        <div className="xl:w-1/4 w-full xl:pt-0 pt-10 relative">
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
};

export default Videos;
