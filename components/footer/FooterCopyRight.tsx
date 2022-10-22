import React from "react";
import FooterCopyRightSocialMediaIcon from "./FooterCopyRightSocialMediaIcon";

type Props = {};

const FooterCopyRight = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between max-w-screen-2xl mx-auto relative w-full py-8 2xl:px-0 px-3">
      <h4 className="text-white font-robotoMono text-xs">
        © 2022 Filbasket Media Ventures, LLC. All rights reserved.
      </h4>
      <FooterCopyRightSocialMediaIcon />
    </div>
  );
};

export default FooterCopyRight;
