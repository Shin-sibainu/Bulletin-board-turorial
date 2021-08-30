import React from "react";
import { NavLink } from "react-router-dom";

export const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
    </ul>
  );
};
