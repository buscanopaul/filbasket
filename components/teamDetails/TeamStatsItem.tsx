import React from "react";

type Props = {};

const TeamStatsItem = (props: Props) => {
  return (
    <tr className="text-white font-robotoMono">
      <td className="pt-5 flex flex-row items-start cursor-pointer sticky left-0 w-52 bg-secondary-color md:border-none border-r">
        <div
          style={{
            backgroundImage: `url(https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png)`,
          }}
          className={`relative h-10 w-10 bg-cover bg-no-repeat bg-center rounded-full bg-primary-color`}
        />
        <div className="pl-4">
          <p className="font-robotoMonoBold underline-offset-1">Luka</p>
          <p className="font-robotoMonoBold underline-offset-1">Doncic</p>
        </div>
      </td>
      <td className="py-3 px-8">1</td>
      <td className="py-3 px-8">7</td>
      <td className="py-3 px-8">36.6</td>
      <td className="py-3 px-8">36.1</td>
      <td className="py-3 px-8">12.7</td>
      <td className="py-3 px-8">24.7</td>
      <td className="py-3 px-8">51.4</td>
      <td className="py-3 px-8">2.0</td>
      <td className="py-3 px-8">8.4</td>
      <td className="py-3 px-8">23.7</td>
      <td className="py-3 px-8">8.7</td>
      <td className="py-3 px-8">11.7</td>
      <td className="py-3 px-8">77.7</td>
      <td className="py-3 px-8">1.7</td>
      <td className="py-3 px-8">7.7</td>
      <td className="py-3 px-8">8.7</td>
      <td className="py-3 px-8">9.7</td>
      <td className="py-3 px-8">1.7</td>
      <td className="py-3 px-8">0.7</td>
      <td className="py-3 px-8">3.7</td>
    </tr>
  );
};

export default TeamStatsItem;
