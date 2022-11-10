import React from "react";

type Props = {
  title: String;
  isDark: Boolean;
  isLeft: Boolean;
};

const SubTitle = (props: Props) => {
  return (
    <div className="md:w-1/2 w-full px-3 mb-10 mx-auto">
      <h2
        className={`${
          props.isLeft ? `text-left` : `text-center`
        } font-robotoMono text-lg pb-5 ${
          props.isDark ? `text-secondary-color` : `text-white`
        } `}
      >
        {props.title}
      </h2>
    </div>
  );
};

export default SubTitle;
