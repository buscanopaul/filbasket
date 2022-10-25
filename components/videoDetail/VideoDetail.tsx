import React from "react";
import Divider from "../Divider";
import VideoComments from "./VideoComments";

type Props = {};

const VideoDetail = (props: Props) => {
  return (
    <div className="relative">
      <iframe
        className="w-full aspect-video rounded-md"
        src="https://www.youtube.com/embed/RdACcw_eZRc"
        allowfullscreen
      ></iframe>
      <h3 className="font-fiba text-secondary-color text-2xl pt-5 mb-1">
        Nash Drops 27 PTS & 16 AST To Guide Suns | #NBATogetherLive Classic Game
      </h3>
      <span className="font-robotoMono text-sm text-gray-500">
        2.6M views &#x2022; 2 years ago
      </span>
      <Divider />
      <VideoComments />
    </div>
  );
};

export default VideoDetail;
