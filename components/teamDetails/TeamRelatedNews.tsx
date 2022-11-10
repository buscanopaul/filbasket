import React from "react";
import RelatedArticleItem from "../newsDetail/RelatedArticleItem";
import Title from "../text/Title";

type Props = {};

const TeamRelatedNews = (props: Props) => {
  return (
    <div className="relative pt-10">
      <Title title="Related news" isDark={true} isLeft={true} />
      <div className="grid md:grid-cols-4 md:gap-8 grid-cols-1 gap-8 w-full items-centered relative">
        <RelatedArticleItem />
        <RelatedArticleItem />
        <RelatedArticleItem />
        <RelatedArticleItem />
      </div>
    </div>
  );
};

export default TeamRelatedNews;
