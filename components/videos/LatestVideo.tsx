import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import bg from "../../styles/images/thumbnail_jordan.jpeg";

type Props = {};

const LatestVideo = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/VxtvYWpKong/maxresdefault.jpg)`,
      }}
      className={`md:h-[700px] h-[600px] bg-black bg-contain bg-no-repeat md:bg-right bg-top relative mb-10 hover:!bg-[url(https://i.ytimg.com/an_webp/VxtvYWpKong/mqdefault_6s.webp?du=3000&sqp=CLDo2JoG&rs=AOn4CLBs2iewFc3b_4tMVJNEQygzBajN0A)] transition-all duration-500 ease-in-out`}
    >
      <Link href={`/videos/${1}`}>
        <div className="md:w-1/2 w-full h-full flex flex-col md:justify-center justify-end">
          <div className="bg-gradient-to-r from-black w-1/2 h-full absolute" />
          <div className="bg-gradient-to-r from-black w-1/2 h-full absolute" />
          <div className="bg-gradient-to-r from-black w-1/2 h-full absolute" />
          <div className="bg-gradient-to-r from-black w-1/2 h-full absolute" />
          <div className="z-50 p-10">
            <h1 className="font-fiba text-white md:text-5xl text-3xl pb-4">
              RAPTORS at HEAT | NBA FULL GAME HIGHLIGHTS | October 22, 2022
            </h1>
            <p className="font-robotoMono text-gray-300 text-xs">
              The NBA is back. But for today, we'll preview the games that will
              kick off the new season: Sixers versus Celtics, and the Lakers
              versus the Warriors. Joining us for an all out discussion is
              Sports Writer Josh Planos. He joins us live via Zoom from Nebraska
              in the US.
            </p>
            <button
              className="bg-primary-color w-40 font-robotoMonoBold rounded-full py-3 flex flex-row items-center justify-center mt-8 hover:bg-white transition hover:text-secondary-color"
              onClick={console.log("ds")}
            >
              <PlayCircleIcon className="transition h-5 w-5 mr-1" />
              PLAY NOW
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestVideo;
