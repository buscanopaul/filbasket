import React, { useState } from "react";
import Title from "../text/Title";
import TeamTabsItem from "./TeamTabsItem";
import TeamTabsProfile from "./TeamTabsProfile";
import TeamsTabsRoster from "./TeamTabsRoster";
import TeamTabsBackgroundAndUpcoming from "./TeamTabsBackgroundAndUpcoming";
import ScheduleList from "../schedule/ScheduleList";
import TeamSchedule from "./TeamSchedule";

type Props = {};

const TeamTabs = (props: Props) => {
  const [openTab, setOpenTab] = useState<Number>(1);
  const [active, setActive] = useState<Number>(1);

  const setTabAndActive = (number: Number) => {
    setOpenTab(number);
    setActive(number);
  };

  return (
    <div className="items-center bg-gray-100 rounded-md lg:p-10 p-5 mt-10">
      <Title title="Team Information" isDark={true} isLeft={true} />
      <div className="mb-4">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <TeamTabsItem
            title="Profile"
            tabNumber={1}
            active={active}
            setOpenTabToggled={() => setTabAndActive(1)}
          />
          <TeamTabsItem
            title="Team Schedule"
            tabNumber={2}
            active={active}
            setOpenTabToggled={() => setTabAndActive(2)}
          />
          <TeamTabsItem
            title="Stats"
            tabNumber={3}
            active={active}
            setOpenTabToggled={() => setTabAndActive(3)}
          />
        </ul>
      </div>
      <div id="myTabContent">
        <div className={`${openTab == 1 ? `block` : `hidden`}`}>
          <div className={`p-4 rounded-lg bg-secondary-color`}>
            <TeamTabsProfile />
            <TeamsTabsRoster />
          </div>
          <TeamTabsBackgroundAndUpcoming />
        </div>
        <div
          className={`p-4 bg-secondary-color rounded-lg ${
            openTab == 2 ? `block` : `hidden`
          }`}
        >
          <TeamSchedule isDark={true} />
        </div>
        <div
          className={`p-4 bg-gray-50 rounded-lg dark:bg-gray-800 ${
            openTab == 3 ? `block` : `hidden`
          }`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
