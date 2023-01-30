import React from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import mealsImage from "../../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
