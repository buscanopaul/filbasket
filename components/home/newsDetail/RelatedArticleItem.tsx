import React from "react";
import bg from "../../../styles/images/thumbnail_jordan.jpeg";

type Props = {};

const RelatedArticleItem = (props: Props) => {
  return (
    <div className="relative w-full">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className={`rounded-md md:h-60 h-80 bg-secondary-color bg-cover bg-no-repeat bg-center relative`}
      />
      <h3 className="font-robotoMonoBold text-lg pt-1 line-clamp-2 text-secondary-color">
        Top 12 Websites to Find Graphic Design Jobs (Full‑Time & Freelance)
      </h3>
      <div className="flex flex-row items-center mt-5">
        <p className="text-gray-400 font-robotoMono text-xs">
          December 24, 2022
        </p>
        <p className="text-gray-400 font-robotoMono text-xs pl-5">5 min read</p>
      </div>
    </div>
  );
};

export default RelatedArticleItem;
