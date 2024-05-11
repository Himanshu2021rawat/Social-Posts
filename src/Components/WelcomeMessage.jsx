import React from "react";
import style from "./WelcomeMessage.module.css";
import CreatePost from "./CreatePost";

const WelcomeMessage = ({ setNavigation }) => {
  const Addpost = () => {
    setNavigation("CreatePost");
  };

  return (
    <div className={style.welcomecontainer}>
      <h1 className={style.welcomeheading}>Welcome To The Social-Posts</h1>
      <p className={style.subheading}>Would You Like To Add Post...</p>
      <button onClick={() => Addpost()}>Add Post</button>
    </div>
  );
};

export default WelcomeMessage;
