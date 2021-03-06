import React from "react";
import { NavLink } from "react-router-dom";

export const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighter-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};
