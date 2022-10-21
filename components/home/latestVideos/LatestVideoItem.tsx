import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import styles from "./LatestVideoItem.module.css";

interface Props {}

const LatestVideoItem = ({}: Props) => {
  return (
    <div
      className={`w-full mx-3 h-72 rounded-md mb-7 relative overflow-hidden cursor-pointer ${styles.latestVideoItem}`}
    >
      <div
        style={{
          backgroundImage: `url('https://i.ytimg.com/vi/Xx43HKG96sw/maxresdefault.jpg')`,
        }}
        className={`bg-secondary-color h-full bg-cover ${styles.latestVideoItem} bg-no-repeat bg-center relative transition-all duration-500 ease-in-out transform hover:scale-110 groupLatest`}
      ></div>
      <PlayCircleIcon className="transition hover:drop-shadow-xl h-14 w-14 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 groupLatest-hover:scale-80 hover:text-primary-color" />
    </div>
  );
};

export default LatestVideoItem;
