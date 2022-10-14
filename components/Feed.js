import React from "react";
import CreatePost from "./CreatePost";
import LeftSidebar from "./LeftSidebar";
import Posts from "./Posts";
import RightSidebar from "./RightSidebar";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex  bg-[#f2f3f7] ">
      {/* LeftSidebar */}
      <LeftSidebar />
      <div className="mx-auto">
        {/* Stories */}
        <Stories />
        {/* CreatePost */}
        <CreatePost />
        {/* Posts */}
        <Posts />
      </div>

      {/* RightSidebar */}
      <RightSidebar />
    </div>
  );
};

export default Feed;
