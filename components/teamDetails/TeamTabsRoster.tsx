import React from "react";
import TeamTabsRosterItem from "./TeamTabsRosterItem";

type Props = {};

const TeamsTabsRoster = (props: Props) => {
  return (
    <div className="w-full relative pt-10 overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="text-left text-secondary-color font-fiba text-lg bg-primary-color rounded-md">
          <tr>
            <th className="md:w-52 left-0 sticky bg-primary-color md:border-none border-r pl-1">
              PLAYER
            </th>
            <th className="py-3 px-8">#</th>
            <th className="py-3 px-8">POS</th>
            <th className="py-3 px-8">HEIGHT</th>
            <th className="py-3 px-8">WEIGHT</th>
            <th className="py-3 px-8">BIRTHDATE</th>
            <th className="py-3 px-8">AGE</th>
          </tr>
        </thead>
        <tbody>
          <TeamTabsRosterItem />
          <TeamTabsRosterItem />
          <TeamTabsRosterItem />
          <TeamTabsRosterItem />
          <TeamTabsRosterItem />
          <TeamTabsRosterItem />
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTabsRoster;
