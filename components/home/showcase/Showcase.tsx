import Image from "next/image";
import React from "react";
import bg from "../../../styles/images/bg-showcase.jpeg";

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
      <img
        style={{ width: 800 }}
        src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/306959601_210123531354865_7108149813088365516_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEavIeD8_sxgKPCYNVO0E5z3-c2hHlmLeDf5zaEeWYt4K27mf1dbQaz9SDlEVYKBamgs16L1EM3r3tTJWCSbqcb&_nc_ohc=ovK0x-DJJzgAX9keMXw&_nc_ht=scontent.fmnl4-1.fna&oh=00_AT9Pw4q8Foe7Zd-9AP4oJI9is8pYETQ1NSudJttIiFDOwA&oe=635188A9"
      />
    </div>
  );
}

export default Showcase;
