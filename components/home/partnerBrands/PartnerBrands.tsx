import React from "react";
import PartnerBrandsItem from "./partnerBrandsItem";
import { useMediaQuery } from "react-responsive";

type Props = {};

const slideImages = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
    title: "Everything You Need To Know About The 2022-23 G League Season",
  },
  {
    id: 2,
    url: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    title: "2022 NBA G League Draft Board",
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Sports_logo.svg/1200px-One_Sports_logo.svg.png",
    title: "Scoot Henderson, Victor Wembanyama Duel It Out In Vegas",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gatorade_logo_before_2009.png",
    title: "Henderson's 28 PTS, 9 AST Lead Ignite To Preseason Win",
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Globe-logo.png",
    title:
      "LaMelo Ball diagnosed with ankle sprain, status uncertain for season opener",
  },
  {
    id: 6,
    url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Frontrow_logo.png",
    title: "The 22-23 G League Schedule Has Dropped!",
  },
];

function PartnerBrands({}: Props) {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      className={`max-w-screen-2xl mx-auto w-full px-3 ${
        isTablet ? `pt-24` : `pt-6`
      }`}
    >
      <h2 className={`text-center font-fiba text-4xl`}>Partner Brands</h2>
      <div className="flex flex-wrap justify-around items-center">
        {slideImages.map((slideImage) => (
          <PartnerBrandsItem key={slideImage.id} imageUrl={slideImage.url} />
        ))}
      </div>
    </div>
  );
}

export default PartnerBrands;
