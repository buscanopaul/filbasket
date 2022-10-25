import Image from "next/image";
import React from "react";

type Props = {};

const VideoCommentsItem = (props: Props) => {
  return (
    <div className="flex flex-row items-start mt-5 relative w-full">
      <Image
        className="rounded-full"
        src="https://yt3.ggpht.com/ytc/AMLnZu_2BuaYbPbrhlliIks-2-FhM-IAbNafde-ll326sg=s48-c-k-c0x00ffffff-no-rj"
        width={50}
        height={50}
      />
      <div className="md:pr-10 pl-3 w-full relative">
        <p className="text-xs font-robotoMonoBold">
          Fergus Fung &#x2022; 2 years ago
        </p>
        <p className="text-xs font-robotoMono">
          people seem to forget how good steve nash was. He was a back-to-back
          mvp, an underrated scorer and one of the best passers in league
          history. Phoenix wouldnt have been able to run the 7-sec offense
          without him
        </p>
      </div>
    </div>
  );
};

export default VideoCommentsItem;
