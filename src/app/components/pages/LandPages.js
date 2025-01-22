"use client";

// responsive carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//react
import { react, useState, useEffect } from "react";
import Image from "next/image";
import Bed from "@/app/components/common/Bed";
import Bath from "@/app/components/common/Bath";
import Car from "@/app/components/common/Car";

//redux
import { connect } from "react-redux";

import FormatPrices from "@/app/components/common/FormatPrices";

// import renderHTML from "react-render-html";

const LandPages = (props) => {
  let itemSelling = Object.values(props.filteredlist);
  let selectedItem = itemSelling.filter((elem) => {
    return elem.url_slug === props.slug;
  });

  console.log(selectedItem);

  return (
    <div>
      <div className="i-col60 i-fl padd-right-2rem">
        <ImageCarousel data={selectedItem[0]} />
      </div>
      <div className="i-col40 i-fr">
        <h1> {selectedItem[0].title} </h1>
        <div className="i-col100 i-fl">
          <div className="for-sale-detail-subheader">
            {selectedItem[0].subheader}
          </div>
          <div className="for-sale-detail-price">
            Price: <FormatPrices>{selectedItem[0].price}</FormatPrices>
          </div>
          <div className="for-sale-detail-area">
            Lot Area: <span>{selectedItem[0].lotArea}</span> SQM
          </div>
          <div className="for-sale-detail-area">
            Floor Area: <span>{selectedItem[0].floorArea}</span> SQM
          </div>
          <div className="for-sale-detail-type">
            Selling Type: <span>{selectedItem[0].selling_type[0]}</span>
          </div>
        </div>
        <div className="i-col50 i-fl for-sale-detail-content ">
          <div className="for-sale-detail-specs">
            <div className="icon">
              {" "}
              <Bed /> <span>{selectedItem[0].bed}</span>
            </div>
            <div className="icon">
              {" "}
              <Bath /> <span>{selectedItem[0].bath}</span>
            </div>
            <div className="icon">
              {" "}
              <Car /> <span>{selectedItem[0].car}</span>
            </div>
          </div>
        </div>
        <div className="i-col50 i-fr"></div>
        <div className="i-col100 i-fl for-sale-detail-content">
          <h3> Additional Details: </h3>
          {/*renderHTML(selectedItem[0].details) */}
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = (props) => {
  let array = [];
  array.push(props.data.image_header);
  props.data.first_image ? array.push(props.data.first_image) : null;
  props.data.second_image ? array.push(props.data.second_image) : null;
  props.data.third_image ? array.push(props.data.third_image) : null;
  props.data.fourth_image ? array.push(props.data.fourth_image) : null;
  props.data.fifth_image ? array.push(props.data.fifth_image) : null;
  props.data.sixth_image ? array.push(props.data.sixth_image) : null;

  return (
    <Carousel showThumbs={false} showStatus={false}>
      {array.map((image, key) => {
        if (key === 0) {
          return (
            <Image
              key={key}
              src={image}
              width={2000}
              height={2000}
              className="for-sale-detail-img"
              alt="Picture of the author"
            />
          );
        } else {
          return (
            <Image
              key={key}
              src={image}
              width={2000}
              height={2000}
              className="for-sale-detail-img"
              alt="Picture of the author"
            />
          );
        }
      })}
    </Carousel>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    filteredlist: state.nowselling.filteredlist || [],
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(LandPages);
