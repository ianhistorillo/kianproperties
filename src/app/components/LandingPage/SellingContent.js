"use client";

import Image from "next/image";
import Land from "../../../../public/assets/LAND.jpeg";
import HouseLand from "../../../../public/assets/malibic.jpeg";
import Condo from "../../../../public/assets/azure-north.jpg";
import Townhouse from "../../../../public/assets/woodtown.jpeg";
import HomeLogo from "../common/HomeLogo";

const SellingContent = () => {
  const switchOptions = (activeElem) => {
    let prevActiveTab = document.querySelector(
      ".for-sale-page-box-options-header.active"
    );
    let prevActiveContent = document.querySelector(
      ".for-sale-page-box-options-content-list.active"
    );
    let currActive = document.getElementById(activeElem);
    let selectedActiveTab = document.querySelector(
      `div.for-sale-page-box-options-header.${activeElem}`
    );

    prevActiveTab.classList.remove("active");
    prevActiveContent.classList.remove("active");
    currActive.classList.add("active");
    selectedActiveTab.classList.add("active");
  };

  return (
    <div className="for-sale-page">
      <div className="i-col100 for-sale-page-box ">
        <h1 className="title fade-in"> WIDE OPEN CHOICE </h1>
        <span className="underline fade-in "></span>
        <div className="content">
          <p className="fade-in">
            {" "}
            Are you ready to invest in your future? Explore our exclusive
            listings of prime land available for sale. Whether you’re looking
            for a serene escape, a new home site, or an investment opportunity,
            we have the perfect land waiting for you.
          </p>
        </div>
        <div className="i-col100 for-sale-page-box-options">
          <div
            className="i-col25 for-sale-page-box-options-header land active i-fl"
            onClick={() => switchOptions("land")}
          >
            {" "}
            Land{" "}
          </div>
          <div
            className="i-col25 for-sale-page-box-options-header house-land i-fl"
            onClick={() => switchOptions("house-land")}
          >
            {" "}
            House and Lot{" "}
          </div>
          <div
            className="i-col25 for-sale-page-box-options-header condominium i-fl"
            onClick={() => switchOptions("condominium")}
          >
            {" "}
            Condominium{" "}
          </div>
          <div
            className="i-col25 for-sale-page-box-options-header townhomes i-fl"
            onClick={() => switchOptions("townhomes")}
          >
            {" "}
            Townhomes{" "}
          </div>
          <div className="i-col100 for-sale-page-box-options-content">
            <div
              id="land"
              className="for-sale-page-box-options-content-list active"
            >
              <div className="i-col70 i-fl">
                <Image src={Land} className="img" alt="content picture" />
              </div>
              <div className="i-col30 i-fr">
                <HomeLogo />
                <h2 className="logoText"> kian properties </h2>
                <h2> Land for sale</h2>
                <p>
                  {" "}
                  Unlock endless possibilities with our prime land for sale.
                  Whether you’re dreaming of building your ideal home,
                  investing, or starting a new project, we have the right parcel
                  for you.
                </p>
                <div className="button"> FIND OUT MORE </div>
              </div>
            </div>
            <div
              id="house-land"
              className="for-sale-page-box-options-content-list"
            >
              <div className="i-col70 i-fl">
                <Image src={HouseLand} className="img" alt="content picture" />
              </div>
              <div className="i-col30 i-fr">
                <HomeLogo />
                <h2 className="logoText"> kian properties </h2>
                <h2> House and Land </h2>
                <p>
                  {" "}
                  Discover the perfect blend of comfort and convenience with our
                  stunning house and land packages. Whether you`re a first-time
                  buyer or looking to invest, we offer a diverse range of
                  properties tailored to your lifestyle.
                </p>
                <div className="button"> FIND OUT MORE </div>
              </div>
            </div>
            <div
              id="condominium"
              className="for-sale-page-box-options-content-list"
            >
              <div className="i-col70 i-fl">
                <Image src={Condo} className="img" alt="content picture" />
              </div>
              <div className="i-col30 i-fr">
                <HomeLogo />
                <h2 className="logoText"> kian properties </h2>
                <h2> Condominium </h2>
                <p>
                  {" "}
                  Discover luxury living in our stunning condominiums, designed
                  for modern lifestyles. Whether you’re looking for a stylish
                  retreat or a smart investment, we have the perfect space for
                  you.
                </p>
                <div className="button"> FIND OUT MORE </div>
              </div>
            </div>
            <div
              id="townhomes"
              className="for-sale-page-box-options-content-list"
            >
              <div className="i-col70 i-fl">
                <Image src={Townhouse} className="img" alt="content picture" />
              </div>
              <div className="i-col30 i-fr">
                <HomeLogo />
                <h2 className="logoText"> kian properties </h2>
                <h2> Townhomes </h2>
                <p>
                  Experience the perfect blend of comfort and community with our
                  beautiful townhomes. Ideal for families, professionals, and
                  everyone in between, our properties offer a stylish and
                  convenient lifestyle.
                </p>
                <div className="button"> FIND OUT MORE </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingContent;
