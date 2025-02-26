"use client";

import React from "react";
// import Home from "../Icons/Home";
// import About from "../Icons/About";
// import Projects from "../Icons/Projects";
// import Skills from "../Icons/Skills";

const NavItem = (props) => {
  return (
    <a
      className={`nav-icon ${props.class ? props.class : ""}`}
      href={props.route}
      aria-current="page"
    >
      <div>
        <small>{props.name}</small>
      </div>
    </a>
  );
};

export default NavItem;
