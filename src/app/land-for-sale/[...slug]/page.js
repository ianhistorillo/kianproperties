"use client";

import "../../styles/_main.scss";
import "../../styles/components/_pages.scss";

import { react, useState, useEffect } from "react";
import Image from "next/image";
import Bed from "@/app/components/common/Bed";
import Bath from "@/app/components/common/Bath";
import Car from "@/app/components/common/Car";

// house images
import FirstItem from "../../../../public/assets/2br.jpeg";
import SecondItem from "../../../../public/assets/3br.jpeg";
import ThirdItem from "../../../../public/assets/4br.jpeg";
import FifthItem from "../../../../public/assets/5br.jpeg";
import SixItem from "../../../../public/assets/2br-phase1.png";
import SeventhItem from "../../../../public/assets/2br-phase3.jpeg";
import EightItem from "../../../../public/assets/4br-phase1.jpeg";
import FormatPrices from "@/app/components/common/FormatPrices";

// responsive carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import renderHTML from "react-render-html";

const Land = ({ params }) => {
  const [data, setData] = useState(null);

  async function getNowSellingData() {
    try {
      const response = await fetch(
        "http://localhost:8888/kianproperties/wp-json/wp/v2/posts/?acf_format=standard&per_page=100"
      ); // Fetch data from the API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Make sure the response is JSON
      return data;
    } catch (error) {
      console.error("Error fetching search criteria:", error);
      return null;
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNowSellingData();

      let pck = Array.isArray(result) ? result : [];

      // Now you can safely use filter
      let filtered = pck.filter((elem) => {
        return elem.id === parseInt(params.slug[0]);
        // Your filtering logic
      });

      setData(filtered);
    };

    fetchData();
  }, []);

  const goBack = (e) => {
    e.preventDefault();
    setTimeout(() => {
      history.back();
      document.querySelector(".now-selling-page").scrollIntoView();
    }, 100);
  };

  if (data) {
    console.log(data[0]);
    return (
      <div className="for-sale-detail">
        <div className="i-col100 i-fl margin-bot">
          {" "}
          <a href="/" onClick={(e) => goBack(e)}>
            <span> {"<"} </span>
            <span>BACK </span>
          </a>
        </div>
        <div className="i-col60 i-fl padd-right-2rem">
          <ImageCarousel data={data[0].acf} />
        </div>
        <div className="i-col40 i-fr">
          <h1> {data[0].acf.title} </h1>
          <div className="i-col100 i-fl">
            <div className="for-sale-detail-subheader">
              {data[0].acf.subheader}
            </div>
            <div className="for-sale-detail-price">
              Price: <FormatPrices>{data[0].acf.price}</FormatPrices>
            </div>
            <div className="for-sale-detail-area">
              Area: <span>{data[0].acf.area}</span> SQM
            </div>
            <div className="for-sale-detail-type">
              Selling Type: <span>{data[0].acf.selling_type[0]}</span>
            </div>
          </div>
          <div className="i-col50 i-fl for-sale-detail-content ">
            <div className="for-sale-detail-specs">
              <div className="icon">
                {" "}
                <Bed /> <span>{data[0].acf.bed}</span>
              </div>
              <div className="icon">
                {" "}
                <Bath /> <span>{data[0].acf.bath}</span>
              </div>
              <div className="icon">
                {" "}
                <Car /> <span>{data[0].acf.car}</span>
              </div>
            </div>
          </div>
          <div className="i-col50 i-fr"></div>
          <div className="i-col100 i-fl for-sale-detail-content">
            <h3> Additional Details: </h3>
            {renderHTML(data[0].acf.details)}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
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

export default Land;
