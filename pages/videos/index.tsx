import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Title from "../../components/text/Title";
import LatestVideo from "../../components/videos/LatestVideo";
import LatestVideosAndTop from "../../components/videos/LatestVideosAndTop";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10 cursor-pointer">
      <LatestVideo />
      <LatestVideosAndTop />
    </div>
  );
};

export default index;
