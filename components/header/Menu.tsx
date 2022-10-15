import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-row items-center justify-center">
        <MenuItem title="News" px={4} isPrimary={true} isBorder={false} />
        <MenuItem title="Schedule" px={4} isPrimary={true} isBorder={false} />
        <MenuItem title="Teams" px={4} isPrimary={true} isBorder={false} />
        <MenuItem title="Standings" px={4} isPrimary={true} isBorder={false} />
        <MenuItem title="Stats" px={4} isPrimary={true} isBorder={false} />
        <MenuItem title="Videos" px={4} isPrimary={true} isBorder={false} />
        <MenuItem title="About" px={4} isPrimary={true} isBorder={false} />
      </div>
    </div>
  );
}

export default Menu;
