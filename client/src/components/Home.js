import React, { useEffect, useState } from "react";
import Navbar from "./tweets/Navbar";
import People from "./widgets/People";
import Search from "./widgets/Search";
import TweetBox from "./tweets/TweetBox";
import Sidebar from "./sidebar/Sidebar";
import Post from "./tweets/Post";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import Widgets from "./widgets/widgets";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:8000/gettweet");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  posts.map((post) => {
    console.log(post._id);
  });

  return (
    <div className="grid grid-cols-7 bg-slate-200 ">
      <Sidebar />
      <div className="grid col-start-2 col-span-4">
        <div className="sticky top-0 z-10">
          <Navbar />
          <TweetBox />
        </div>
        <FlipMove>
          {posts.map((post, index) => (
            <Post
              key={post.text}
              id={post._id}
              displayName={post.user.username}
              username={post.user.username}
              verified="true"
              text={post.tweet}
              avatar={post.avatar}
            />
          ))}
        </FlipMove>
      </div>
      <div className=" col-span-2  flex flex-col gap-10 p-4 border-white">
        <div className="flex justify-center items-center sticky -top-0 shadow-lg ">
          <Search />
        </div>
        <div>
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;
