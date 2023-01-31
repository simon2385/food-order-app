import React from "react";
import CartIcon from "../../Cart/CratIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={classes.badge}>3</div>
    </button>
  );
};

export default HeaderCartButton;
