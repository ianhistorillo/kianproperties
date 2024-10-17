"use client";

import React from "react";

const Button = (props) => {
  return (
    <a href={`${props.path}`} className={`${props.type} button`}>
      <span> {props.name} </span>
    </a>
  );
};

export default Button;
