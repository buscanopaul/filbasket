import React from "react";
import Featured from "./featured/Featured";
import PartnerBrands from "./partnerBrands/partnerBrands";
import ScoresCarousel from "./scores/ScoresCarousel";
import Showcase from "./showcase/Showcase";

type Props = {};

function HomeScreen({}: Props) {
  return (
    <div>
      <ScoresCarousel />
      <Featured />
      <PartnerBrands />
      <Showcase />
    </div>
  );
}

export default HomeScreen;
