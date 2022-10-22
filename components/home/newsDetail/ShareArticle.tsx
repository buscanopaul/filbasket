import React from "react";

type Props = {};

const ShareArticle = (props: Props) => {
  return (
    <div className="flex flex-row mt-5">
      <svg
        className="w-6 h-6 text-secondary-color fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M22.1 11.0C22.1 4.9 17.1 0 11.0 0S0 4.9 0 11.0C0 16.5 4.0 21.1 9.3 22v-7.7h-2.8v-3.1h2.8V8.6c0-2.7 1.6-4.3 4.1-4.3 1.2 0 2.4.216 2.4.216v2.7H14.6c-1.3 0-1.8.853-1.8 1.7v2.0h3.0l-.49 3.2h-2.5V22c5.2-.83 9.3-5.4 9.3-10.9"
        ></path>
      </svg>
      <p className="pl-2 text-secondary-color font-robotoMono">Facebook</p>
    </div>
  );
};

export default ShareArticle;
