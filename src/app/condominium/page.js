"use client";

//react-redux
import { connect } from "react-redux";
import React from "react";

import Image from "next/image";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";
import Navigation from "../components/Navigation/Navigation";

import SearchFilter from "@/app/land-for-sale/SearchFilter";
import ForSaleCard from "../components/UI/ForSaleCard";

// Main Page Navigation

const LandForSale = (props) => {
  let itemKeys = Object.values(props.nowselling);
  let itemSelling = Object.values(props.filteredlist);

  if (itemKeys.length > 0) {
    return (
      <React.Fragment>
        <Navigation type="other-page" />
        <div className="now-selling-page">
          <div className="i-col100 now-selling-title">
            <h1> CONDOMINIUM </h1>
            <span className="underline"></span>
          </div>
          <div className="i-col100 now-selling-section">
            <div className="i-col20 now-selling-filtersticky i-fl">
              <div className="now-selling-filter">
                <span className="filter-by-title"> Filter By: </span>
                <SearchFilter />
              </div>
            </div>
            <div className="i-col80 now-selling-scrollable-element scrollable-element">
              <div className="i-col100 i-fr now-selling-scrollable-content">
                <div className="now-selling-section-list">
                  {itemSelling.length > 0 ? (
                    <DisplaySellingSection itemSelling={itemSelling} />
                  ) : (
                    <div className="int-loader">
                      <h3> No selling items displayed at the moment.</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div className="now-selling-page">
        <div className="i-col100 now-selling-title">
          <h1> CONDOMINIUM</h1>
          <span className="underline"></span>
        </div>
        <div className="i-col100 now-selling-section">
          <div className="int-loader"></div>
        </div>
      </div>
    );
  }
};

const DisplaySellingSection = (props) => {
  if (props.itemSelling) {
    return props.itemSelling.toReversed().map((item, idx) => {
      return (
        <ForSaleCard
          key={idx}
          imageSrc={item.image_header}
          title={item.title}
          desc={item.subheader}
          selling_type={item.selling_type}
          monthly_rent={item.monthly_rent}
          price={item.price}
          bed={item.bed}
          bath={item.bath}
          car={item.car}
          area={item.area}
          slug={item.url_slug}
        />
      );
    });
  } else {
    return null;
  }
  // return (
  //   <React.Fragment>
  //     <Navigation />
  //     <div className="main">
  //       <div className="i-col100 i-container">
  //         <h1 className="landing-page-title"> LAND FOR SALE </h1>
  //       </div>
  //     </div>
  //   </React.Fragment>
  // );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    nowselling: state.nowselling.list || [],
    filteredlist: state.nowselling.filteredlist || [],
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(LandForSale);
