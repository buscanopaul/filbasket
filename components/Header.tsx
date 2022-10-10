import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Header() {
  const [active, setActive] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
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
              src={require("../styles/images/logo.png")}
              width={200}
              height={70}
            />
          </Link>
          {/* mobile menu */}
          <div className="md:hidden">
            <button onClick={() => setActive(!active)}>
              <Image
                className="cursor-pointer hover:opacity-80"
                src={require("../styles/images/logo_menu.png")}
                width={30}
                height={30}
              />
            </button>
          </div>
          {/* menu */}
          <div className="hidden md:flex">
            <div className="flex flex-row items-center justify-center">
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    News
                  </h1>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    Schedule
                  </h1>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    Teams
                  </h1>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    Standings
                  </h1>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    Stats
                  </h1>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    Videos
                  </h1>
                </Link>
              </div>
              <div className="px-4">
                <Link href="/">
                  <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                    About
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          {/* search */}
          <div className="hidden md:flex">
            <Link href="/">
              <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
                Contact
              </h1>
            </Link>
          </div>
        </div>
      </div>
      {active && (
        <div ref={dropdown} className="bg-yellow-500 px-4 pb-5">
          <Link href="/news">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              News
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              Schedule
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              Teams
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              Standings
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              Videos
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              About
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-black py-2 border-b border-black">
              Contact
            </h1>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
