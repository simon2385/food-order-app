import React from "react";
import CartIcon from "../../Cart/CratIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <spam className={classes.icon}>
        <CartIcon />
      </spam>
      <spam>Your Cart</spam>
      <spam className={classes.badge}>3</spam>
    </button>
  );
};

export default HeaderCartButton;
