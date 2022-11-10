import Link from "next/link";
import React from "react";
import bg from "../../styles/images/thumbnail_jordan.jpeg";

type Props = {};

const RelatedArticleItem = (props: Props) => {
  return (
    <Link href={`/news/${1}`}>
      <div className="relative w-full cursor-pointer">
        <div
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/Zg3j6anDU6U/maxresdefault.jpg)`,
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
          <p className="text-gray-400 font-robotoMono text-xs pl-5">
            5 min read
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedArticleItem;
