import React from "react";
import Featured from "./featured/Featured";
import LatestVideos from "./latestVideos/LatestVideos";
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
      <LatestVideos />
    </div>
  );
}

export default HomeScreen;
