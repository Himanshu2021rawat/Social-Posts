import React from "react";
import { PiGitlabLogoDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerBar}>
        <PiGitlabLogoDuotone />
        <input type="text" name="" id="" placeholder="Search Your Post..." />
        <CgProfile />
      </div>
    </>
  );
};

export default Header;
