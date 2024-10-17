"use client";

import React from "react";
import NavItem from "./NavItem";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="nav">
        <div className="nav-container">
          <NavItem name="" route="" active={props.activePage} />
          <NavItem
            name="Contact Me"
            route="/land-for-sale"
            active={props.activePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
