import React from "react";
import Image from "next/image";
import "./styles/components/_pages.scss";
import "./styles/components/_navigation.scss";
import Button from "./components/UI/Button";
import Navigation from "./components/Navigation/Navigation";
import ForSaleCard from "./components/UI/ForSaleCard";
import HomeLogo from "./components/common/HomeLogo";
import SearchFilter from "./land-for-sale/SearchFilter";
import SellingContent from "./components/LandingPage/SellingContent";
import NowSelling from "./components/LandingPage/NowSelling";
import ContactForm from "./components/Form/ContactForm";
import CounterComponent from "./components/CounterComponent";

export default function Home() {
  return (
    <div>
      <Navigation type="main-page" />
      <div className="main enableBlur">
        <div className="i-container i-col100 landing-page fade-in-image disableBlur">
          <div className="border-left"></div>
          <div className="landing-page-welcome-box">
            <HomeLogo />
            {/* <h1 className="landing-page-title"> NOW SELLING </h1> */}
            <span className="landing-page-sub"> PROPERTIES BY KIAN </span>
            <div className="landing-page-welcome-text">
              <span> Your Gateway to Dream Homes and Smart Investments! </span>
              <p>
                {" "}
                Whether you're looking to buy, sell, or invest, we offer a
                seamless experience tailored just for you.
              </p>
            </div>
            <div className="landing-page-developer">
              <span>Proudly developed by</span>
              <span className="developer">ianhistorillo</span>
            </div>
          </div>
          <div className="border-right"></div>
        </div>
      </div>
      <SellingContent />
      <NowSelling />
      <ContactForm />
    </div>
  );
}
