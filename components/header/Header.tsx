import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";

function Header() {
  const [active, setActive] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current) {
        setActive(false);
      }
    }
    function handleResize() {
      setActive(false);
    }
    // Bind the event listener
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [dropdown]);

  return (
    <header>
      <div className="relative bg-secondary-color">
        <div className="max-w-screen-2xl mx-auto flex flex-row items-center justify-between px-2 py-3 w-full">
          {/* logo */}
          <Link href="/">
            <Image
              className="cursor-pointer hover:opacity-80"
              src={require("../../styles/images/logo.png")}
              width={200}
              height={70}
            />
          </Link>
          {/* mobile menu */}
          <div className="md:hidden">
            <button onClick={() => setActive(!active)}>
              <Image
                className="cursor-pointer hover:opacity-80"
                src={require("../../styles/images/logo_menu.png")}
                width={30}
                height={30}
              />
            </button>
          </div>
          {/* menu */}
          <Menu />
          {/* search */}
          <div className="hidden md:flex">
            <MenuItem
              title="Contact"
              page="contact"
              px={0}
              isPrimary={true}
              isBorder={false}
            />
          </div>
        </div>
      </div>
      {active && <MobileMenu ref={dropdown} />}
    </header>
  );
}

export default Header;
