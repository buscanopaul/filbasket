import Link from "next/link";
import React from "react";
import bg from "../../styles/images/thumbnail_jordan.jpeg";

type Props = {};

const MostPopularVideosItem = (props: Props) => {
  return (
    <div className="relative w-full mb-5">
      <Link href={`/videos/${1}`}>
        <div className="relative flex flex-row items-start justify-start rounded-full w-full">
          <div
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/d89FaVZnoRg/maxresdefault.jpg)`,
            }}
            className={`h-24 bg-secondary-color bg-cover bg-no-repeat bg-center rounded-md relative w-60 hover:!bg-[url(https://i.ytimg.com/an_webp/d89FaVZnoRg/mqdefault_6s.webp?du=3000&sqp=CMDc2JoG&rs=AOn4CLC70F0U_B2_oHh_QU1XGLV2P44eKw)] transition-all duration-500 ease-in-out`}
          >
            <div className="bg-secondary-color absolute right-2 bottom-3 px-1 py-0.5 flex items-center justify-center">
              <span className="font-robotoMono text-white text-xs">5:57</span>
            </div>
          </div>
          <div className="pl-2 w-full">
            <h4 className="font-robotoMonoBold text-secondary-color line-clamp-2 text-xs">
              LeBron James Cavaliers Debut | NBA Classic Games
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

export default MostPopularVideosItem;
