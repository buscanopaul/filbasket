import Link from "next/link";
import React from "react";

type Props = {};

const StatsPlayerItem = (props: Props) => {
  return (
    <tr className="odd:bg-gray-100 text-right">
      <td className="pl-1 flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 2xl:bg-transparent bg-gray-100">
        <div className="flex flex-row items-center">
          <p className="font-robotoMonoBold text-xl">1</p>
          <div
            style={{
              backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
            }}
            className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
          />
          <p className="font-robotoMonoBold pl-1 text-blue-500">
            <Link href={`/player/${1}`}>Kevin Durant</Link>
          </p>
        </div>
      </td>
      <td className="py-3 px-2 text-left text-blue-500">
        <Link href={`/teams/${1}`}>BKN</Link>
      </td>
      <td className="py-3 px-2">34</td>
      <td className="py-3 px-2">10</td>
      <td className="py-3 px-2">4</td>
      <td className="py-3 px-2">6</td>
      <td className="py-3 px-2">372.7</td>
      <td className="py-3 px-2">315</td>
      <td className="py-3 px-2">105</td>
      <td className="py-3 px-2">202</td>
      <td className="py-3 px-2">52.0</td>
      <td className="py-3 px-2">17</td>
      <td className="py-3 px-2">51</td>
      <td className="py-3 px-2">33.3</td>
      <td className="py-3 px-2">88</td>
      <td className="py-3 px-2">93</td>
      <td className="py-3 px-2">94.6</td>
      <td className="py-3 px-2">4</td>
      <td className="py-3 px-2">58</td>
      <td className="py-3 px-2">62</td>
      <td className="py-3 px-2">48</td>
      <td className="py-3 px-2">36</td>
      <td className="py-3 px-2">8</td>
      <td className="py-3 px-2">20</td>
      <td className="py-3 px-2">23</td>
      <td className="py-3 px-2">509</td>
      <td className="py-3 px-2">18</td>
    </tr>
  );
};

export default StatsPlayerItem;
