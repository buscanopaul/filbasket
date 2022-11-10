import React from "react";

type Props = {};

const TeamsTabsBackground = (props: Props) => {
  return (
    <div className="bg-secondary-color rounded-md p-4 h-full">
      <h3 className="font-fiba text-2xl text-white mb-5">Background</h3>
      <div className="flex flex-row items-center justify-between">
        <div className="text-white font-robotoMonoBold text-lg w-1/2">
          <p className="pb-2">Founded</p>
          <p className="pb-2">City</p>
          <p className="pb-2">Arena</p>
          <p className="pb-2">Owner</p>
          <p className="pb-2">General Manager</p>
          <p className="pb-2">Head Coach</p>
        </div>
        <div className="text-white font-robotoMono text-lg w-1/2">
          <p className="pb-2">1948</p>
          <p className="pb-2">Los Angeles</p>
          <p className="pb-2">Crypto.com Arena</p>
          <p className="pb-2">Jerry Buss Family Trust</p>
          <p className="pb-2">Rob Pelinka</p>
          <p className="pb-2">Darvin Ham</p>
        </div>
      </div>
    </div>
  );
};

export default TeamsTabsBackground;
