import React, { forwardRef } from "react";
import "./Post.css";

import { Avatar } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, id }, ref) => {
    const navigate = useNavigate();
    let sendFormData = async (tweetId) => {
      let response = await fetch("http://localhost:8000/deletetweet", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(tweetId),
        // set credentials to be true to allow cookies to be sent from the server to the client
        credentials: "include",
      });

      return response;
    };

    const deleteHandler = async (e) => {
      e.preventDefault();
      let tweetId = {
        id: { id },
      };
      let response = await sendFormData(tweetId);
      if (response.status == 200) {
        navigate(0);
      }
    };
    return (
      <div
        className="post  bg-white border  border-b-4 shadow-lg rounded-lg m-2"
        ref={ref}
      >
        <div className="post__avatar">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && (
                    <VerifiedIcon
                      color="primary"
                      className="post__badge"
                    />
                  )}{" "}
                  @{username}
                </span>
              </h3>
            </div>

            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img
            src={image}
            alt=""
          />

          <div className=" flex justify-between mt-6">
            <Button>
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <Button>
              <RepeatIcon fontSize="small" />
            </Button>
            <Button>
              <FavoriteBorderIcon fontSize="small" />
            </Button>
            <Button>
              <PublishIcon fontSize="small" />
            </Button>

            <Button
              onClick={deleteHandler}
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

export default Post;
