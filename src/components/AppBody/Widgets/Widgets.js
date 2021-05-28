import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn</h2>
        <InfoIcon />
      </div>

      {newsArticle("LinkedIn Clone", "Ready to come alive")}
      {newsArticle("Coronavirus Updates", "White fungus case reported")}
      {newsArticle("Bitcoin goes down further", "7.47% decrease in value")}
      {newsArticle(
        "Case of Missing Oceans Plastic",
        "Where does 99% of it go?"
      )}
      {newsArticle("Sequel to Joker", "Do you think it should be made")}
      {newsArticle(
        "Coinbase Invests in India",
        "In Augmented Reality NFT startup Anima"
      )}
    </div>
  );
}

export default Widgets;
