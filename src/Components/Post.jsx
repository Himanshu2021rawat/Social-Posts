import React, { useContext } from "react";
import style from "./Post.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { PostLists } from "./store/PostListStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostLists);

  return (
    <div className={style.postCard}>
      <div className={style.subPostCard}>
        <h3>{post.userId}</h3>
        <img src={post.img} alt="" />
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h4>
        This post is reacted by <span>{post.reaction}</span> Socials
      </h4>

      <a href="" className={style.tags}>
        {post.tags.map((tag) => (
          <h5 key={tag}>{tag}</h5>
        ))}
      </a>

      <AiOutlineDelete
        className={style.delete}
        onClick={() => deletePost(post.id)}
      />
    </div>
  );
};

export default Post;
