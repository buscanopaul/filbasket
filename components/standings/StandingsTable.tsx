import React from "react";
import StandingsYear from "./StandingsYear";

type Props = {};

const StandingsTable = (props: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-row items-center justify-between">
        <h4 className="font-fiba text-2xl text-secondary-color mb-5">
          2022 Filbasket - Filipino Basketball League
        </h4>
        <StandingsYear />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table-auto relative w-full">
          <thead>
            <tr className="text-left font-robotoMonoBold text-secondary-color border-y">
              <th className="md:w-32 sticky left-0 py-3 pl-2 bg-white xl:border-none border-r border-gray-200">
                Team
              </th>
              <th className="px-8">W</th>
              <th className="px-8">L</th>
              <th className="px-8">WIN %</th>
              <th className="px-8">GB</th>
              <th className="px-8">PT DIF</th>
              <th className="px-8">L10</th>
              <th className="px-8">STREAK</th>
            </tr>
          </thead>
          <tbody className="text-secondary-color">
            <tr className="odd:bg-gray-100">
              <td className="flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 odd:bg-gray-100 pl-2 bg-white">
                <div className="flex flex-row items-center">
                  <p className="font-robotoMonoBold text-xl">1</p>
                  <div
                    style={{
                      backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
                    }}
                    className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
                  />
                  <p className="font-robotoMonoBold pl-1">Miami Heat</p>
                </div>
              </td>
              <td className="py-3 px-8">53</td>
              <td className="py-3 px-8">29</td>
              <td className="py-3 px-8">.646</td>
              <td className="py-3 px-8">2</td>
              <td className="py-3 px-8">16</td>
              <td className="py-3 px-8">1-3</td>
              <td className="py-3 px-8">W 11</td>
            </tr>
            <tr className="odd:bg-gray-100">
              <td className="flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 z-50 even:bg-gray-100 pl-2 bg-white">
                <div className="flex flex-row items-center">
                  <p className="font-robotoMonoBold text-xl">1</p>
                  <div
                    style={{
                      backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
                    }}
                    className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
                  />
                  <p className="font-robotoMonoBold pl-1">Miami Heat</p>
                </div>
              </td>
              <td className="py-3 px-8">53</td>
              <td className="py-3 px-8">29</td>
              <td className="py-3 px-8">.646</td>
              <td className="py-3 px-8">2</td>
              <td className="py-3 px-8">16</td>
              <td className="py-3 px-8">1-3</td>
              <td className="py-3 px-8">W 11</td>
            </tr>
            <tr className="odd:bg-gray-100">
              <td className="flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 z-50 odd:bg-gray-100 pl-2 bg-white">
                <div className="flex flex-row items-center">
                  <p className="font-robotoMonoBold text-xl">1</p>
                  <div
                    style={{
                      backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
                    }}
                    className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
                  />
                  <p className="font-robotoMonoBold pl-1">Miami Heat</p>
                </div>
              </td>
              <td className="py-3 px-8">53</td>
              <td className="py-3 px-8">29</td>
              <td className="py-3 px-8">.646</td>
              <td className="py-3 px-8">2</td>
              <td className="py-3 px-8">16</td>
              <td className="py-3 px-8">1-3</td>
              <td className="py-3 px-8">W 11</td>
            </tr>
            <tr className="odd:bg-gray-100">
              <td className="flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 z-50 odd:bg-gray-100 pl-2 bg-white">
                <div className="flex flex-row items-center">
                  <p className="font-robotoMonoBold text-xl">1</p>
                  <div
                    style={{
                      backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
                    }}
                    className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
                  />
                  <p className="font-robotoMonoBold pl-1">Miami Heat</p>
                </div>
              </td>
              <td className="py-3 px-8">53</td>
              <td className="py-3 px-8">29</td>
              <td className="py-3 px-8">.646</td>
              <td className="py-3 px-8">2</td>
              <td className="py-3 px-8">16</td>
              <td className="py-3 px-8">1-3</td>
              <td className="py-3 px-8">W 11</td>
            </tr>
            <tr className="odd:bg-gray-100">
              <td className="flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 z-50 odd:bg-gray-100 pl-2 bg-white">
                <div className="flex flex-row items-center">
                  <p className="font-robotoMonoBold text-xl">1</p>
                  <div
                    style={{
                      backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
                    }}
                    className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
                  />
                  <p className="font-robotoMonoBold pl-1">Miami Heat</p>
                </div>
              </td>
              <td className="py-3 px-8">53</td>
              <td className="py-3 px-8">29</td>
              <td className="py-3 px-8">.646</td>
              <td className="py-3 px-8">2</td>
              <td className="py-3 px-8">16</td>
              <td className="py-3 px-8">1-3</td>
              <td className="py-3 px-8">W 11</td>
            </tr>
            <tr className="odd:bg-gray-100">
              <td className="flex flex-row items-center py-3 sticky left-0 w-52 xl:border-none border-r border-gray-200 z-50 odd:bg-gray-100 pl-2 bg-white">
                <div className="flex flex-row items-center">
                  <p className="font-robotoMonoBold text-xl">1</p>
                  <div
                    style={{
                      backgroundImage: `url('https://ak-static.cms.nba.com/wp-content/uploads/logos/nbagleague/1612709920/primary/L/logo.svg')`,
                    }}
                    className={`w-8 h-8 bg-no-repeat bg-center bg-contain ml-2`}
                  />
                  <p className="font-robotoMonoBold pl-1">Miami Heat</p>
                </div>
              </td>
              <td className="py-3 px-8">53</td>
              <td className="py-3 px-8">29</td>
              <td className="py-3 px-8">.646</td>
              <td className="py-3 px-8">2</td>
              <td className="py-3 px-8">16</td>
              <td className="py-3 px-8">1-3</td>
              <td className="py-3 px-8">W 11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandingsTable;
