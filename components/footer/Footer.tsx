import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterCopyRight from "./FooterCopyRight";
import FooterMenu from "./FooterMenu";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-secondary-color relative">
      <div className="flex lg:flex-row flex-col items-start justify-between max-w-screen-2xl mx-auto relative w-full py-14 border-b border-gray-500 2xl:px-0 px-3">
        <Link href="/">
          <Image
            className="cursor-pointer hover:opacity-80"
            src={require("../../styles/images/logo.png")}
            width={200}
            height={70}
          />
        </Link>
        <FooterMenu title="About us" />
        <FooterMenu title="Projects" />
        <FooterMenu title="Support" />
        <FooterMenu title="Other" />
      </div>
      <FooterCopyRight />
    </div>
  );
};

export default Footer;
