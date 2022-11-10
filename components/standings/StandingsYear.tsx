import React, { useState } from "react";

type Props = {};

const StandingsYear = (props: Props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="mb-4">
      <button
        onClick={() => setVisible(!isVisible)}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="w-44 font-robotoMonoBold text-secondary-color bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        2022-2023
        <svg
          className="ml-2 w-4 h-4 right-3 absolute"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isVisible && (
        <div
          id="dropdown"
          className="z-50 w-44 rounded divide-y top-12 right-0 divide-gray-100 shadow bg-secondary-color absolute"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200 font-robotoMono"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2022-2023
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2021-2022
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2020-2021
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                2019-2020
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StandingsYear;
