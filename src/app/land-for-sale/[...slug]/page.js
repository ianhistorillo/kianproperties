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

const Land = ({ params }) => {
  const [data, setData] = useState(null);

  async function getSearchCriteria() {
    try {
      const response = await fetch("/api/data"); // Fetch data from the API
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
      const result = await getSearchCriteria();
      let pck = Array.isArray(result.landforsale) ? result.landforsale : [];
      // Now you can safely use filter
      let filtered = pck.filter((elem) => {
        return elem.slug === params.slug[0];
        // Your filtering logic
      });

      setData(filtered);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div className="for-sale-detail">
        <div className="i-col100 i-fl margin-bot">
          {" "}
          <span> {"<"} </span>
          <span>BACK </span>
        </div>
        <div className="i-col60 i-fl padd-right-2rem">
          <Image
            src={`http://localhost:3000/assets/${data[0].imgUrl}`}
            width={2000}
            height={2000}
            className="for-sale-detail-img"
            alt="Picture of the author"
          />
        </div>
        <div className="i-col40 i-fr">
          <h1> {data[0].title} </h1>
          <div className="i-col100 i-fl">
            <div className="for-sale-detail-subheader">{data[0].subheader}</div>
            <div className="for-sale-detail-price">Price: {data[0].price}</div>
          </div>
          <div className="i-col30 i-fl for-sale-detail-content">
            <div className="for-sale-detail-area">
              Area: <span>{data[0].area}</span>
            </div>
          </div>
          <div className="i-col70 i-fr for-sale-detail-content ">
            <div className="for-sale-detail-specs">
              <div className="icon">
                {" "}
                <Bed /> <span>{data[0].bed}</span>
              </div>
              <div className="icon">
                {" "}
                <Bath /> <span>{data[0].bath}</span>
              </div>
              <div className="icon">
                {" "}
                <Car /> <span>{data[0].car}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Land;
