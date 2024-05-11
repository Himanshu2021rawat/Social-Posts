import React from "react";
import style from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <>
      <div className={style.sidebar}>
        <h3
          onClick={() => props.setNavigation("Home")}
          className={props.navigation === "Home" && "active"}
        >
          Home
        </h3>
        <h3
          onClick={() => props.setNavigation("CreatePost")}
          className={props.navigation !== "Home" ? "active" : ""}
        >
          CreatePost
        </h3>
        <h3>Help</h3>
        <h3>About</h3>
        <h3>Socials</h3>
        <h3>Tech Support</h3>
      </div>
    </>
  );
};

export default Sidebar;
