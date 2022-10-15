import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScoresCarouselItem from "./ScoresCarouselItem";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

const ScoresCarousel = ({}: Props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}>
        <ChevronRightIcon
          className="h-6 w-6 text-secondary-color"
          style={{
            ...style,
            display: "block",
          }}
          onClick={onClick}
        />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}>
        <ChevronLeftIcon
          className="h-6 w-6 text-secondary-color"
          style={{
            ...style,
            display: "block",
          }}
          onClick={onClick}
        />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto my-10 px-7">
      <Slider {...settings}>
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
        <ScoresCarouselItem />
      </Slider>
    </div>
  );
};

export default ScoresCarousel;
