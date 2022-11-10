import Image from "next/image";
import React from "react";
import bg from "../../../styles/images/bg-showcase-nba.png";

interface Props {}

function Showcase({}: Props) {
  const imageUrl = "";
  return (
    <div
      className="cursor-pointer relative flex flex-col justify-center items-center bg-contain bg-center bg-no-repeat"
      style={{
        backgroundColor: "#0D1440",
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <img style={{ width: "100%" }} src={bg.src} />
    </div>
  );
}

export default Showcase;
