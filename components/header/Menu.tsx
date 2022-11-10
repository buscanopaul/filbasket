import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-row items-center justify-center">
        <MenuItem
          title="News"
          page="news"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
        <MenuItem
          title="Schedule"
          page="schedule"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
        <MenuItem
          title="Teams"
          page="teams"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
        <MenuItem
          title="Standings"
          page="standings"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
        <MenuItem
          title="Stats"
          page="stats"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
        <MenuItem
          title="Videos"
          page="videos"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
        <MenuItem
          title="About"
          page="about"
          px={4}
          isPrimary={true}
          isBorder={false}
        />
      </div>
    </div>
  );
}

export default Menu;
