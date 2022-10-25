import Link from "next/link";
import React from "react";
import bg from "../../styles/images/thumbnail_jordan.jpeg";

type Props = {};

const LatestVideosItem = (props: Props) => {
  return (
    <div className="w-full mb-10 relative">
      <Link href={`/videos/${1}`}>
        <div>
          <div
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/51cm2-pToVM/maxresdefault.jpg)`,
            }}
            className={`relative xl:h-44 h-60 bg-secondary-color bg-cover bg-no-repeat bg-center rounded-md hover:!bg-[url(https://i.ytimg.com/an_webp/51cm2-pToVM/mqdefault_6s.webp?du=3000&sqp=CM_h2JoG&rs=AOn4CLAT6Gl9GIlGf6Fzpa9hRkV6ri1x-A)] transition-all duration-500 ease-in-out`}
          >
            <div className="bg-secondary-color absolute right-2 bottom-3 px-1 py-0.5 flex items-center justify-center">
              <span className="font-robotoMono text-white text-xs">9:47</span>
            </div>
          </div>
          <span className="font-robotoMonoBold text-secondary-color line-clamp-2 pt-2">
            Allen Iverson's First NBA Game | NBA Classic Game
          </span>
          <p className="pt-2 font-robotoMono text-gray-500 text-xs">
            48K views &#x2022; 2 days ago
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LatestVideosItem;
