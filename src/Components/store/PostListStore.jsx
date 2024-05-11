import React, { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPost, action) => {
  let newPost = currPost;

  if (action.type === "DELETE_POST") {
    newPost = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPost = [action.payload, ...currPost];
  }

  return newPost;
};

const PostListStore = ({ children }) => {
  const addPost = (
    userId,
    postImgUrl,
    postTitle,
    postBody,
    postReaction,
    postTags
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        img: postImgUrl,
        title: postTitle,
        body: postBody,
        reaction: postReaction,
        userId: userId,
        tags: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostLists.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

export default PostListStore;
