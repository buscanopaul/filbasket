import React, { useState } from "react";

type Props = {
  tabNumber: Number;
  title: String;
  active: Number;
};

const TeamTabsItem = (props: Props) => {
  return (
    <li className="mr-2" role="presentation">
      <button
        onClick={() => props.setOpenTabToggled(props.tabNumber)}
        className={`inline-block p-4 pl-0 rounded-t-lg border-b-2 font-robotoMonoBold ${
          props.active == props.tabNumber
            ? `text-primary-color hover:text-primary-color border-primary-color`
            : `hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100`
        }`}
      >
        {props.title}
      </button>
    </li>
  );
};

export default TeamTabsItem;
