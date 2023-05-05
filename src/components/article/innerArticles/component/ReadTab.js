import React from "react";
import ArticleList from "./ArticleList";
import ArticleListView from "./ArticleListView";
import "./Article.css";

const ReadTab = ({
  articleDescription,
  hasListView,
  ListView,
  hasList,
  List,
  conclusion,
}) => {
  return (
    <div className="read-tab">
      {articleDescription && (
        <p className="article-description">{articleDescription}</p>
      )}
      {hasListView && <ArticleListView ListView={ListView} />}
      {hasList && <ArticleList List={List} />}
      {conclusion && <p className="conclusion">{conclusion}</p>}
    </div>
  );
};

export default ReadTab;
