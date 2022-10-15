import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  imageUrl: String;
}

const PartnerBrandsItem: NextPage<Props> = (props: Props) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={`py-4 grayscale opacity-70 ${isTablet ? `` : `px-4`}`}>
      <Image
        src={props.imageUrl}
        width={150}
        height={150}
        objectFit="contain"
      />
    </div>
  );
};

export default PartnerBrandsItem;
