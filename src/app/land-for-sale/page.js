import React from "react";
import Image from "next/image";
import "../styles/components/_navigation.scss";
import Navigation from "../components/Navigation/Navigation";

// Main Page Navigation

const LandForSale = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="main">
        <div className="i-col100 i-container">
          <h1 className="landing-page-title"> LAND FOR SALE </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandForSale;
