import React from "react";
import Title from "../../text/Title";
import LatestVideoItem from "./LatestVideoItem";
import PopularVideo from "./PopularVideo";
import styles from "./LatestVideos.module.css";

interface Props {}

const LatestVideos = ({}: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 mt-20">
      <Title title="Most Popular" isDark={true} isLeft={true} />
      <PopularVideo />
      <Title title="Latest Videos" isDark={true} isLeft={true} />
      <div
        className={`flex flex-col ${styles.latestVideos} items-center w-full mb-40`}
      >
        <LatestVideoItem />
        <LatestVideoItem />
        <LatestVideoItem />
        <LatestVideoItem />
      </div>
    </div>
  );
};

export default LatestVideos;
