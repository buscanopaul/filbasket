import React from "react";
import bg from "../../../styles/images/thumbnail_jordan.jpeg";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import styles from "./PopularVideo.module.css";

interface Props {}

const PopularVideo = ({}: Props) => {
  return (
    <div className="w-full relative overflow-hidden rounded-md cursor-pointer mb-5">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className={`${styles.PopularVideo} h-96 bg-secondary-color bg-cover bg-no-repeat bg-center relative transition-all duration-500 ease-in-out transform hover:scale-110 group`}
      ></div>
      <PlayCircleIcon className="transition hover:drop-shadow-xl h-20 w-20 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-80 hover:text-primary-color" />
    </div>
  );
};

export default PopularVideo;
