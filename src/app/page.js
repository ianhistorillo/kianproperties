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

// house images
import FirstItem from "../../public/assets/2br.jpeg";
import SecondItem from "../../public/assets/3br.jpeg";
import ThirdItem from "../../public/assets/4br.jpeg";
import FifthItem from "../../public/assets/5br.jpeg";
import SixItem from "../../public/assets/2br-phase1.png";
import SeventhItem from "../../public/assets/2br-phase3.jpeg";
import EightItem from "../../public/assets/4br-phase1.jpeg";
import ContactForm from "./components/Form/ContactForm";

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
      <div className="now-selling-page">
        <div className="i-col100 now-selling-title">
          <h1> NOW SELLING </h1>
          <span className="underline"></span>
        </div>
        <div className="i-col100 now-selling-section">
          <div className="i-col100 i-fl">
            <div className="now-selling-filter">
              <SearchFilter />
            </div>
          </div>
          <div className="i-col100 i-fl">
            <div className="now-selling-section-list">
              <ForSaleCard
                imageSrc={FifthItem}
                title="5 BR House and Lot"
                desc="Greenwoods - Northfolk Ridge"
                price="₱9,000,000"
                slug={`lfs-1`}
              />
              <ForSaleCard
                imageSrc={FirstItem}
                title="2BR Bungalow"
                desc="Greenwoods Height"
                price="₱4,800,000"
                slug={`lfs-2`}
              />
              <ForSaleCard
                imageSrc={SecondItem}
                title="3BR House and Lot"
                desc="Greenwoods Executive Village"
                price="₱7,500,000"
                slug={`lfs-3`}
              />
              <ForSaleCard
                imageSrc={ThirdItem}
                title="4BR House and Lot"
                desc="Greenwoods Executive Village"
                price="₱5,800,000"
                slug={`lfs-4`}
              />
              <ForSaleCard
                imageSrc={SixItem}
                title="2BR House and Lot - PHASE 1"
                desc="Greenwoods Executive Village (RENT)"
                price="₱20,000.00"
                slug={`lfs-5`}
              />
              <ForSaleCard
                imageSrc={SeventhItem}
                title="2BR House and Lot - PHASE 3A"
                desc="Greenwoods Executive Village (RENT)"
                price="₱15,000.00"
                slug={`lfs-6`}
              />
              <ForSaleCard
                imageSrc={EightItem}
                title="4BR House and Lot - PHASE 4"
                desc="Greenwoods Executive Village"
                price="₱9,000,000"
                slug={`lfs-7`}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </React.Fragment>
  );
}
