"use client";

import React from "react";
import NavItem from "./NavItem";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="nav">
        <div className="nav-container">
          <NavItem
            name="Land For Sale"
            route="/land-for-sale"
            active={props.activePage}
          />
          <NavItem name="House and Lot" route="/house-and-lot" /> 
          <NavItem name="Condominium" route="/condominium" />
          <NavItem name="Townhomes" route="/townhomes" />
          <NavItem name="Contact Me" route="#contact-me" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
