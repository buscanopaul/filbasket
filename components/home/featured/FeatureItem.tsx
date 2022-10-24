import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./FeaturedItem.module.css";

interface Props {
  imageUrl: String;
  title: String;
}

const FeatureItem: NextPage<Props> = (props: Props) => {
  return (
    <Link href={`/news/${1}`}>
      <div
        className={`cursor-pointer w-full relative rounded-md bg-secondary-color ${styles.featureItemContainer}`}
        style={{ height: 300 }}
      >
        <div
          className="flex flex-col justify-end h-full bg-cover bg-center rounded-md transition bg-secondary-color"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        >
          <div
            className={`h-1/2 flex flex-col justify-end px-5 py-10 bg-gradient-to-t from-black ${styles.featureItemHeight}`}
          >
            <div className={`border-l-4 w-full ${styles.featureItemWidth}`}>
              <div className="pl-4">
                <div className="flex flex-row items-center pb-2">
                  <CalendarDaysIcon className="h-8 w-8 text-white" />
                  <p className="text-white font-fiba text-lg pl-1">14 OCT</p>
                </div>
                <h1
                  className={`text-white text-xl font-fiba ${styles.featureItemText}`}
                >
                  {props.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureItem;
