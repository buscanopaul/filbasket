import React from "react";
import Featured from "./featured/Featured";
import ScoresCarousel from "./scores/ScoresCarousel";

type Props = {};

function HomeScreen({}: Props) {
  return (
    <div>
      <ScoresCarousel />
      <Featured />
    </div>
  );
}

export default HomeScreen;
