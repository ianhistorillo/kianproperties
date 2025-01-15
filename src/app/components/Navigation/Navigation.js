"use client";

import React, { useEffect } from "react";
import NavItem from "./NavItem";

const Navigation = (props) => {
  useEffect(() => {
    const reveal = () => {
      let mainNav = document.querySelector(".navigation");
      let navContainer = document.querySelector(".nav-container");
      let elementTop = mainNav.getBoundingClientRect().top + window.scrollY;
      let elementVisible = 700;
      let windowHeight = window.innerHeight;

      if (elementTop > windowHeight - elementVisible) {
        mainNav.classList.add("reveal");
        navContainer.classList.remove("fade-right");
        navContainer.classList.add("fade-left");
      } else {
        mainNav.classList.remove("reveal");
        navContainer.classList.remove("fade-left");
        navContainer.classList.add("fade-right");
      }
    };

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
  }, []);

  return (
    <div className={`navigation ${props.type}`}>
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
