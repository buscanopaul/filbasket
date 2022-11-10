import React from "react";

type Props = {};

const TeamTabsRosterItem = (props: Props) => {
  return (
    <tr className="text-white font-robotoMono">
      <td className="pt-5 flex flex-row items-start cursor-pointer sticky left-0 w-52 bg-secondary-color md:border-none border-r">
        <div
          style={{
            backgroundImage: `url(https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png)`,
          }}
          className={`relative h-10 w-10 bg-cover bg-no-repeat bg-center rounded-full bg-primary-color`}
        />
        <div className="pl-4">
          <p className="font-robotoMonoBold underline-offset-1">Russell</p>
          <p className="font-robotoMonoBold underline-offset-1">Westbrook</p>
        </div>
      </td>
      <td className="py-3 px-8">0</td>
      <td className="py-3 px-8">GUARD</td>
      <td className="py-3 px-8">6-3</td>
      <td className="py-3 px-8">200 lbs</td>
      <td className="py-3 px-8">NOV 12, 1988</td>
      <td className="py-3 px-8">33</td>
    </tr>
  );
};

export default TeamTabsRosterItem;
