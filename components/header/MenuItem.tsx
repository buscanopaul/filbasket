import React from "react";
import Link from "next/link";
import { NextPage } from "next";

interface Props {
  title: String;
  px: number;
  isPrimary: Boolean;
  isBorder: Boolean;
  page: String;
}

const MenuItem: NextPage<Props> = (props) => {
  return (
    <div className={`px-${props.px}`}>
      <Link href={`/${props.page}`}>
        <h1
          className={`cursor-pointer text-white font-robotoMonoBold ${
            props.isPrimary ? `hover:text-primary-color` : `hover:text-black`
          } py-2 ${props.isBorder && `border-b border-black`}`}
        >
          {props.title}
        </h1>
      </Link>
    </div>
  );
};

export default MenuItem;
