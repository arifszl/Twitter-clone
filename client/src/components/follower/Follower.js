import React, { useEffect, useState } from "react";

import Sidebar from "../sidebar/Sidebar.js";
import Navbar from "../tweets/Navbar.js";
import People from "../widgets/People.js";
import Search from "../widgets/Search.js";
import Widgets from "../widgets/widgets";
import TweetBox from "../tweets/TweetBox";
import FlipMove from "react-flip-move";

const Follower = () => {
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
    console.log(post.user);
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
          <People />
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

export default Follower;
