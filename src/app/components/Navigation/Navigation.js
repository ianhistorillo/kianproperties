"use client";

import React, { useEffect } from "react";
import NavItem from "./NavItem";

const Navigation = (props) => {
  useEffect(() => {
    const reveal = () => {
      let mainNav = document.querySelector(".navigation");
      let navContainerHeader = document.querySelector(".nav-container-header");
      let navContainerOptions = document.querySelector(
        ".nav-container-options"
      );
      let elementTop = mainNav.getBoundingClientRect().top + window.scrollY;
      let elementVisible = 700;
      let windowHeight = window.innerHeight;

      if (elementTop > windowHeight - elementVisible) {
        mainNav.classList.add("reveal");
        navContainerHeader.classList.remove("fade-right");
        navContainerHeader.classList.add("fade-left");
        navContainerOptions.classList.remove("fade-right");
        navContainerOptions.classList.add("fade-left");
      } else {
        mainNav.classList.remove("reveal");
        navContainerHeader.classList.remove("fade-left");
        navContainerHeader.classList.add("fade-right");
        navContainerOptions.classList.remove("fade-left");
        navContainerOptions.classList.add("fade-right");
      }
    };

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
  }, []);

  return (
    <div className={`navigation ${props.type}`}>
      <div className="nav">
        <div className="nav-container nav-container-header i-fl">
          <NavItem name="Kian Properties" class="header" route="/" />
        </div>
        <div className="nav-container nav-container-options i-fr">
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
