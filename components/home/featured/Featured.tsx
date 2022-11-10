import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import FeatureItem from "./FeatureItem";
import styles from "./Featured.module.css";
import Link from "next/link";

interface Props {}

const slideImages = [
  {
    id: 1,
    url: "https://nba-smart.imgix.net/steph-curry-klay-thompson-jordan-poole-pregame-game-2-carousel.jpg",
    title: "Everything You Need To Know About The 2022-23 G League Season",
  },
  {
    id: 2,
    url: "https://nba-smart.imgix.net/kawhi-pg-media-day-2022-carousel.jpg",
    title: "2022 NBA G League Draft Board",
  },
  {
    id: 3,
    url: "https://nba-smart.imgix.net/doncic-adebayo-carousel.jpg",
    title: "Scoot Henderson, Victor Wembanyama Duel It Out In Vegas",
  },
  {
    id: 4,
    url: "https://nba-smart.imgix.net/zion-iso-050721-1536x864.jpeg",
    title: "Henderson's 28 PTS, 9 AST Lead Ignite To Preseason Win",
  },
  {
    id: 5,
    url: "https://nba-smart.imgix.net/gobert-wolves-preseason-debut-carouel.png",
    title:
      "LaMelo Ball diagnosed with ankle sprain, status uncertain for season opener",
  },
  {
    id: 6,
    url: "https://nba-smart.imgix.net/kerr-draymond.jpg",
    title: "The 22-23 G League Schedule Has Dropped!",
  },
];

const Featured: NextPage<Props> = (props: Props) => {
  var settings = {
    customPaging: function (i) {
      return (
        <a>
          <div>
            <div
              className="thumbnail grayscale hover:grayscale-0 h-28 block relative w-auto bg-cover bg-center rounded-md transition bg-secondary-color"
              style={{
                backgroundImage: `url(${
                  slideImages[i] ? slideImages[i].url : ""
                })`,
              }}
            />

            <p className="thumbnail-title text-left text-xs pt-1 font-robotoMonoBold text-black line-clamp-2">
              {slideImages[i].title}
            </p>
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div
      id="homeFeatured"
      className={`max-w-screen-2xl mx-auto px-3 pb-10 ${styles.homeFeatured}`}
    >
      <Slider {...settings}>
        {slideImages.map((slideImage) => (
          <FeatureItem
            key={slideImage.id}
            imageUrl={slideImage.url}
            title={slideImage.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
