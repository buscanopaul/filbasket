import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import styles from "./LatestVideoItem.module.css";

interface Props {}

const LatestVideoItem = ({}: Props) => {
  return (
    <div
      className={`flex flex-col w-full mx-3 rounded-md mb-7 relative overflow-hidden cursor-pointer ${styles.latestVideoItem}`}
    >
      <Link href={`/videos/${1}`}>
        <div>
          <div
            style={{
              backgroundImage: `url('https://img.youtube.com/vi/7eLIg9d976o/maxresdefault.jpg')`,
            }}
            className={`h-52 hover:!bg-[url(https://i.ytimg.com/an_webp/7eLIg9d976o/mqdefault_6s.webp?du=3000&sqp=CKzF2JoG&rs=AOn4CLB_XAzGwr9vlBqax_7u4csUSmBluA)] transition-all duration-500 ease-in-out bg-secondary-color h-full bg-cover ${styles.latestVideoItem} bg-no-repeat bg-center relative transition-all ease-in-out groupLatest`}
          >
            <PlayCircleIcon className="transition drop-shadow-xl h-14 w-14 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 groupLatest-hover:scale-80 hover:text-primary-color" />
          </div>
          <div className="relative mt-2">
            <h4 className="text-secondary-color font-robotoMonoBold line-clamp-2">
              SUNS at CLIPPERS | NBA FULL GAME HIGHLIGHTS | October 23, 2022
            </h4>
            <span className="font-robotoMono text-xs text-gray-500">
              2.9M views &#x2022; 3 years ago
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestVideoItem;
