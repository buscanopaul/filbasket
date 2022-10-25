import Link from "next/link";
import React from "react";

type Props = {};

const RecommendedVideosItem = (props: Props) => {
  return (
    <div className="relative w-full mb-5">
      <Link href={`/videos/${1}`}>
        <div className="relative flex flex-row items-start justify-start rounded-full w-full">
          <div
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/Em-MnvQAR2I/maxresdefault.jpg)`,
            }}
            className={`cursor-pointer h-24 bg-secondary-color bg-cover bg-no-repeat bg-center rounded-md relative w-60 hover:!bg-[url(https://i.ytimg.com/an_webp/Em-MnvQAR2I/mqdefault_6s.webp?du=3000&sqp=CNiR3ZoG&rs=AOn4CLA9jtrs6_bNh6FxGCXOJSgk4P6dhg)] transition-all duration-500 ease-in-out`}
          >
            <div className="bg-secondary-color absolute right-2 bottom-3 px-1 py-0.5 flex items-center justify-center">
              <span className="font-robotoMono text-white text-xs">5:57</span>
            </div>
          </div>
          <div className="pl-2 w-full cursor-pointer">
            <h4 className="font-robotoMonoBold text-secondary-color line-clamp-2 text-xs">
              Klay Hits Playoff-Record 11 3’s | #NBATogetherLive Classic Game
            </h4>
            <span className="font-robotoMono text-xs text-gray-500">
              2.6M views &#x2022; 2 years ago
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedVideosItem;
