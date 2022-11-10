import React from "react";

type Props = {
  title: String;
  isDark: Boolean;
  isLeft: Boolean;
};

const Title = (props: Props) => {
  return (
    <div>
      <h2
        className={`${
          props.isLeft ? `text-left` : `text-center`
        } font-fiba text-4xl pb-5 ${
          props.isDark ? `text-secondary-color` : `text-white`
        } `}
      >
        {props.title}
      </h2>
    </div>
  );
};

export default Title;
