import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="relative bg-secondary-color">
      <div className="max-w-screen-2xl mx-auto flex flex-row items-center justify-between px-4 py-3 w-full">
        {/* logo */}
        <Link href="/">
          <div className="cursor-pointer transition hover:opacity-80 w-40">
            <Image
              src={require("../styles/images/logo.png")}
              objectFit="contain"
            />
          </div>
        </Link>
        {/* menu */}
        <div className="flex flex-row items-center justify-center invisible lg:visible">
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
              <h1 className="cursor-pointer text-white">Stats</h1>
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
        {/* search */}
        <div>
          <Link href="/">
            <h1 className="cursor-pointer text-white font-robotoMonoBold hover:text-primary-color">
              Search
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
