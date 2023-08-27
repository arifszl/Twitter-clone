import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets  bg-white rounded-lg shadow-lg">
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"933354946111705097"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
