import React from "react";
import bg from "../../styles/images/bg_cover.jpeg";

type Props = {};

const TeamsItem = (props: Props) => {
  return (
    <div
      className={`cursor-pointer justify-between items-center p-10 relative flex flex-row rounded-md border bg-cover bg-no-repeat bg-center border-gray-300 w-full hover:!bg-[url(https://i.imgur.com/vNHBN3o.jpg)] transition-all duration-500 ease-in-out group`}
    >
      <div
        style={{
          backgroundImage: `url(https://b.fssta.com/uploads/application/nba/team-logos/Nets.png)`,
        }}
        className={`relative h-28 w-28 bg-cover`}
      />
      <div>
        <h3 className="font-fiba text-xl text-secondary-color group-hover:text-white">
          Tanduay Rum Masters
        </h3>
        <div className="flex flex-row items-center">
          <p className="font-robotoMono group-hover:text-white">Country:</p>
          <p className="font-robotoMono pl-1 group-hover:text-white">
            Philippines
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamsItem;
