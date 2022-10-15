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
      className="bg-yellow-500 px-4 pb-5 absolute z-50 w-full"
    >
      <MenuItem title="News" px={0} isPrimary={false} isBorder={true} />
      <MenuItem title="Schedule" px={0} isPrimary={false} isBorder={true} />
      <MenuItem title="Teams" px={0} isPrimary={false} isBorder={true} />
      <MenuItem title="Standings" px={0} isPrimary={false} isBorder={true} />
      <MenuItem title="Videos" px={0} isPrimary={false} isBorder={true} />
      <MenuItem title="About" px={0} isPrimary={false} isBorder={true} />
      <MenuItem title="Contact" px={0} isPrimary={false} isBorder={true} />
    </div>
  );
}

export default MobileMenu;
