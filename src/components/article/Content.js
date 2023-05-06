import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "./Constant";
import { Tabs, Tab } from "react-bootstrap";
import ArticleHeader from "./component/ArticleHeader";
import ProductList from "./component/ProductList";
import ReadTab from "./component/ReadTab";
import DiscussTab from "./component/DiscussTab";
import "./Constant.css";

const Content = () => {
  const { articleName } = useParams();
  const product = productData.find(
    (p) => String(p.articleName) === String(articleName)
  );
  const [key, setKey] = useState("read");

  if (product) {
    const {
      articleName,
      artcleMetadata,
      hasListView,
      ListView,
      hasList,
      List,
      description: articleDescription,
      conclustion,
    } = product;
    const renderdata = (
      <ArticleHeader
        articleName={articleName}
        artcleMetadata={artcleMetadata}
      />
    );

    return (
      <div className="content">
        {renderdata}
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="read" title="Read">
            <ReadTab
              articleDescription={articleDescription}
              hasListView={hasListView}
              ListView={ListView}
              hasList={hasList}
              List={List}
              conclustion={conclustion}
            />
          </Tab>
          <Tab eventKey="discuss" title="Discuss">
            <DiscussTab />
          </Tab>
        </Tabs>
      </div>
    );
  } else {
    return <ProductList />;
  }
};

export default Content;
