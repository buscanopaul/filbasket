import React from "react";

type Props = {};

const GameHeaderTimeline = (props: Props) => {
  return (
    <div className="relative mt-5 bg-white p-1 rounded-md">
      <table className="table-auto font-robotoMono text-sm rounded-md">
        <thead>
          <tr>
            <th className="font-fiba">TEAM</th>
            <th className="px-3 font-fiba">Q1</th>
            <th className="px-3 font-fiba">Q2</th>
            <th className="px-3 font-fiba">Q3</th>
            <th className="px-3 font-fiba">Q4</th>
            <th className="px-3 font-fiba">OT1</th>
            <td className="px-3 font-fiba">FINAL</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-fiba">CHA</td>
            <td className="px-3">27</td>
            <td className="px-3">23</td>
            <td className="px-3">23</td>
            <td className="px-3">31</td>
            <td className="px-3">8</td>
            <td className="px-3">112</td>
          </tr>
          <tr>
            <td className="font-fiba">MIA</td>
            <td className="px-3">32</td>
            <td className="px-3">26</td>
            <td className="px-3">27</td>
            <td className="px-3">19</td>
            <td className="px-3">13</td>
            <td className="px-3">117</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameHeaderTimeline;
