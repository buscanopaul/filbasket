import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  imageUrl: String;
}

const PartnerBrandsItem: NextPage<Props> = (props: Props) => {
  return (
    <div className="py-4 grayscale opacity-70">
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
