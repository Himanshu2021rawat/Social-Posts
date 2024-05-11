import React, { useContext, useRef } from "react";
import style from "./CreatePost.module.css";
import { PostLists } from "./store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostLists);

  const userIdElm = useRef();
  const postImgUrlElm = useRef();
  const postTitleElm = useRef();
  const postBodyElm = useRef();
  const postReactionElm = useRef();
  const postTagsElm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElm.current.value;
    const postImgUrl = postImgUrlElm.current.value;
    const postTitle = postTitleElm.current.value;
    const postBody = postBodyElm.current.value;
    const postReaction = postReactionElm.current.value;
    const postTags = postTagsElm.current.value.split(" ");

    addPost(userId, postImgUrl, postTitle, postBody, postReaction, postTags);

    userIdElm.current.value = "";
    postImgUrlElm.current.value = "";
    postTitleElm.current.value = "";
    postBodyElm.current.value = "";
    postReactionElm.current.value = "";
    postTagsElm.current.value = "";
  };

  return (
    <div className={style.PostForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">UserId</label>
          <input
            ref={userIdElm}
            type="text"
            name=""
            id="userID"
            placeholder="Enter Your User Id..."
          />
        </div>

        <div>
          <label htmlFor="postImgUrl">Post Url</label>
          <input
            ref={postImgUrlElm}
            type="text"
            name=""
            id="postImgUrl"
            placeholder="Paste Your Post Url..."
          />
        </div>

        <div>
          <label htmlFor="postTitle">Post Title</label>
          <input
            ref={postTitleElm}
            type="text"
            name=""
            id="postTitle"
            placeholder="Enter your Post title..."
          />
        </div>

        <div>
          <label htmlFor="postBody">Post Body</label>
          <textarea
            ref={postBodyElm}
            name=""
            id="postBody"
            rows={5}
            placeholder="Enter your Post Body..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="postReaction">Post Reactions</label>
          <input
            ref={postReactionElm}
            type="text"
            name=""
            id="postReaction"
            placeholder="Enter your Reactions..."
          />
        </div>

        <div>
          <label htmlFor="postTags">Post #Tags</label>
          <input
            ref={postTagsElm}
            type="text"
            name=""
            id="postTags"
            placeholder="Enter Your HashTags..."
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
