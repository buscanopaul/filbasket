import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import styles from "./PopularVideo.module.css";
import Link from "next/link";

interface Props {}

const PopularVideo = ({}: Props) => {
  return (
    <div className="w-full relative overflow-hidden rounded-md cursor-pointer mb-5">
      <Link href={`/videos/${1}`}>
        <div
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/HlYBqLCaCWU/maxresdefault.jpg)`,
          }}
          className={`${styles.PopularVideo} h-60 bg-secondary-color bg-cover bg-no-repeat bg-center transition-all duration-500 ease-in-out hover:scale-110 group hover:!bg-[url(https://i.ytimg.com/an_webp/HlYBqLCaCWU/mqdefault_6s.webp?du=3000&sqp=CMvj2JoG&rs=AOn4CLD8W-rIcYS3Bn7QQpa9oLjZMcIbxQ)] transition-all duration-500 ease-in-out`}
        ></div>
      </Link>
      <Link href="/videos">
        <PlayCircleIcon className="transition drop-shadow-xl h-20 w-20 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-80 hover:text-primary-color" />
      </Link>
    </div>
  );
};

export default PopularVideo;
