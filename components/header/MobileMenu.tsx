import Link from "next/link";
import React, { useEffect, useRef } from "react";
import MenuItem from "./MenuItem";

function MobileMenu() {
  const dropdown = useRef(null);

  useEffect(() => {
    dropdown.current;
  });

  return (
    <div
      ref={dropdown}
      className="bg-primary-color px-4 pb-5 absolute z-50 w-full"
    >
      <MenuItem
        title="News"
        page="news"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
      <MenuItem
        title="Schedule"
        page="schedule"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
      <MenuItem
        title="Teams"
        page="teams"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
      <MenuItem
        title="Standings"
        page="standings"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
      <MenuItem
        title="Videos"
        page="videos"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
      <MenuItem
        title="About"
        page="about"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
      <MenuItem
        title="Contact"
        page="contact"
        px={0}
        isPrimary={false}
        isBorder={true}
      />
    </div>
  );
}

export default MobileMenu;
