import React, { useRef, useState } from "react";
import "./TweetBox.css";

import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function TweetBox() {
  let userData = useSelector((state) => {
    return state.auth;
  });
  let navigate = useNavigate();
  const tweetRef = useRef("");

  let sendFormData = async (formData) => {
    let response = await fetch("http://localhost:8000/posttweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
      // set credentials to be true to allow cookies to be sent from the server to the client
      credentials: "include",
    });

    return response;
  };

  const formHandler = async (e) => {
    e.preventDefault();
    let formData = {
      tweet: tweetRef.current.value,
      user: userData.userID,
    };

    let response = await sendFormData(formData);
    if (response.status == 200) {
      tweetRef.current.value = " ";
      navigate(0);
    }
    if (response.status == 401) {
      alert("Please login to post a tweet");
      navigate("/login");
    }
  };

  return (
    <div className="tweetBox h-25 shadow-lg rounded-lg bg-white">
      <form onSubmit={formHandler}>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            ref={tweetRef}
            placeholder="What's happening?....."
            type="text"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
