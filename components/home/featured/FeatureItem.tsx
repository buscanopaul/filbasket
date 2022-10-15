import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

type Props = {};

const FeatureItem: NextPage<Props> = (props: Props) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      className="cursor-pointer w-full relative rounded-md bg-secondary-color"
      style={{ height: isTablet ? 600 : 300 }}
    >
      <div
        className="flex flex-col justify-end h-full bg-cover bg-center rounded-md transition bg-secondary-color"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      >
        <div
          className={`h-1/${
            isTablet ? `3` : `2`
          } flex flex-col justify-end px-5 py-10 bg-gradient-to-t from-black`}
        >
          <div className={`border-l-4 w-${isTablet ? `1/2` : `full`}`}>
            <div className="pl-4">
              <div className="flex flex-row items-center pb-2">
                <CalendarDaysIcon className="h-8 w-8 text-white" />
                <p className="text-white font-robotoMonoBold text-lg pl-1">
                  14 OCT
                </p>
              </div>
              <h1
                className={`text-white ${
                  isTablet ? `text-4xl` : `text-xl`
                } font-robotoMonoBold`}
              >
                {props.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
