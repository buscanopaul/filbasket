import Image from "next/image";
import React from "react";
import VideoCommentsItem from "./VideoCommentsItem";

type Props = {};

const VideoComments = (props: Props) => {
  return (
    <div className="relative">
      <h4 className="font-robotoMonoBold text-secondary-color">124 Comments</h4>
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
      <VideoCommentsItem />
    </div>
  );
};

export default VideoComments;
