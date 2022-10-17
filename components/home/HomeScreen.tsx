import React from "react";
import Featured from "./featured/Featured";
import PartnerBrands from "./partnerBrands/partnerBrands";
import ScoresCarousel from "./scores/ScoresCarousel";
import Showcase from "./showcase/Showcase";
import TopPerformers from "./topPerformers/TopPerformers";

type Props = {};

function HomeScreen({}: Props) {
  return (
    <div>
      <ScoresCarousel />
      <Featured />
      <PartnerBrands />
      <Showcase />
      <TopPerformers />
    </div>
  );
}

export default HomeScreen;
