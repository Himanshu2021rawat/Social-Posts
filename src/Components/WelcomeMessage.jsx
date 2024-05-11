import React from "react";
import style from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={style.welcomecontainer}>
      <h1 className={style.welcomeheading}>Welcome To The PostIt</h1>
      <p className={style.subheading}>No Post Yet To Show...</p>
    </div>
  );
};

export default WelcomeMessage;
