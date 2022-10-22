import React from "react";
import CardNewsTemplate from "../../components/news/CardNewsTemplate";
import LargeTitle from "../../components/text/LargeTitle";
import SubTitle from "../../components/text/SubTitle";

const index = () => {
  return (
    <div className="relative md:mt-24">
      <LargeTitle title="Latest News" isDark={true} isLeft={false} />
      <SubTitle
        title="Ready to build your freelance graphic design business? Whether you dream of being your own boss or want to know exactly what it takes to run a successful creative business, we’re here to offer some guidance."
        isDark={true}
        isLeft={false}
      />
      <div className="w-full max-w-screen-2xl mx-auto px-3 justify-around grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-8">
        <CardNewsTemplate />
        <CardNewsTemplate />
        <CardNewsTemplate />
        <CardNewsTemplate />
        <CardNewsTemplate />
      </div>
    </div>
  );
};

export default index;
