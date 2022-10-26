import { HeartIcon, EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "../../styles/images/thumbnail_jordan.jpeg";

type Props = {};

const CardNewsTemplate = (props: Props) => {
  return (
    <div className="relative mb-14">
      <Link href={`/news/${1}`}>
        <div
          style={{
            backgroundImage: `url("${bg.src}")`,
          }}
          className={`cursor-pointer mb-1 rounded-md h-64 bg-secondary-color bg-cover bg-no-repeat bg-center relative`}
        ></div>
      </Link>
      <div>
        {/* date, like and views */}
        <div className="flex flex-row justify-between items-center pt-1">
          {/* <p>6 hours ago</p> */}
          <p className="font-robotoMono text-xs text-gray-400">
            October 20, 2022
          </p>
          <div className="flex flex-row justify-center items-center">
            <HeartIcon
              className="h-5 w-5 text-gray-400"
              style={{
                display: "block",
              }}
            />
            <p className="text-secondary-color font-robotoMono text-xs pl-.5">
              62
            </p>
            <EyeIcon
              className="h-5 w-5 text-gray-400 ml-2"
              style={{
                display: "block",
              }}
            />
            <p className="text-secondary-color font-robotoMono text-xs pl-.5">
              13.3k
            </p>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-secondary-color font-robotoMonoBold text-lg mt-2 line-clamp-2">
          Five Players To Look Out For In The 2022 NBA G League Draft
        </h3>
      </div>
    </div>
  );
};

export default CardNewsTemplate;
