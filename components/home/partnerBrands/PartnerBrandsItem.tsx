import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import styles from "./PartnerBrandsItem.module.css";

interface Props {
  imageUrl: String;
}

const PartnerBrandsItem: NextPage<Props> = (props: Props) => {
  return (
    <div
      className={`py-4 grayscale opacity-70 px-4 ${styles.partnerBrandsItemContainer}`}
    >
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
