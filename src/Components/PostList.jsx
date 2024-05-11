import React, { useContext } from "react";
import Post from "./Post";
import { PostLists } from "./store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = ({ setNavigation }) => {
  const { postList } = useContext(PostLists);
  return (
    <>
      <div className="PostListCards">
        {postList.length === 0 ? (
          <WelcomeMessage setNavigation={setNavigation} />
        ) : (
          postList.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </>
  );
};

export default PostList;
