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

// house images
// import FirstItem from "../../public/assets/2br.jpeg";
// import SecondItem from "../../public/assets/3br.jpeg";
// import ThirdItem from "../../public/assets/4BR-HOUSE-AND-LAND.jpeg";
// import FifthItem from "../../public/assets/5br.jpeg";
// import SixItem from "../../public/assets/5BR-HOUSE-AND-LAND-EAGLE-RIDGE.jpeg";
// import SeventhItem from "../../public/assets/4BR-HOUSE-AND-LAND-2.jpeg";
// import EightItem from "../../public/assets/5BR-HOUSE-AND-LAND.jpeg";
// import NinthItem from "../../public/assets/4br-phase1.jpeg";
// import TenthItem from "../../public/assets/LOT-1.jpeg";
// import EleventhItem from "../../public/assets/LOT-2.jpeg";
// import TwelveItem from "../../public/assets/LOT-3.jpeg";
// import ThirtheenItem from "../../public/assets/LOT-4.jpeg";
// import FourteenItem from "../../public/assets/LOT-5.jpeg";
// import FifteenthItem from "../../public/assets/HOUSE-AND-LOT.jpeg";
// import SixteenthItem from "../../public/assets/LOT-6.jpeg";
// import SeventeenthItem from "../../public/assets/CONDO.jpeg";
// import EighteenthItem from "../../public/assets/CONDO-2.jpeg";
// import NineteenthItem from "../../public/assets/CONDO-3.jpeg";
// import TwenteenthItem from "../../public/assets/CONDO-4.jpeg";
// import TwentyonethItem from "../../public/assets/CONDO-5.jpeg";
// import TwentytwoItem from "../../public/assets/PENTHOUSE.jpeg";
import ContactForm from "./components/Form/ContactForm";
4;

export default function Home() {
  return (
    <React.Fragment>
      <Navigation />
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
    </React.Fragment>
  );
}
