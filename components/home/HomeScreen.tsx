import React from "react";
import Featured from "./featured/Featured";
import PartnerBrands from "./partnerBrands/partnerBrands";
import ScoresCarousel from "./scores/ScoresCarousel";

type Props = {};

function HomeScreen({}: Props) {
  return (
    <div>
      <ScoresCarousel />
      <Featured />
      <PartnerBrands />
    </div>
  );
}

export default HomeScreen;
