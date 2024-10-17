"use client";

import React from "react";
import Image from "next/image";
import Bed from "../common/Bed";
import Bath from "../common/Bath";
import Car from "../common/Car";

const ForSaleCard = (props) => {
  return (
    <div className="forsale-card i-col30 i-fl">
      <div className="forsale-card-header">
        <Image
          src={props.imageSrc}
          className="forsale-card-img"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div className="forsale-card-detail">
        <div className="i-col100 i-fl">
          <h1 className="title"> {props.title} </h1>
          <span className="desc"> {props.desc} </span>
        </div>
        <div className="i-col50 pd-top-1 i-fl">
          <span className="price"> {props.price} </span>
        </div>
        <div className="i-col50 i-fr">
          <div className="forsale-card-detail-specs">
            <div className="specs">
              <Bed /> <span>5</span>
            </div>
            <div className="specs">
              <Bath /> <span>5</span>
            </div>
            <div className="specs">
              <Car /> <span>5</span>
            </div>
          </div>{" "}
        </div>
        <div className="i-col100 i-fl">
          <div className="forsale-card-footer">
            <a href={"#contact-me"} targe="_blank">
              <div className="button content"> ENQUIRE </div>
            </a>
            <a href={`land-for-sale/${props.slug}`} targe="_blank">
              <div className="button"> VIEW </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSaleCard;
