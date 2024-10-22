"use client";
import { react, useState, useEffect } from "react";
import Image from "next/image";
import SearchFilter from "@/app/land-for-sale/SearchFilter";
import ForSaleCard from "../UI/ForSaleCard";

const NowSelling = () => {
  const [data, setData] = useState(null);

  async function getNowSellingData() {
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
      const result = await getNowSellingData();
      // Now you can safely use filter

      setData(result);
    };

    fetchData();
  }, []);
  if (data) {
    return (
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
              {data.landforsale.map((item, idx) => {
                console.log(item.slug);
                return (
                  <ForSaleCard
                    key={idx}
                    imageSrc={`http://localhost:3000/assets/${item.imgUrl}`}
                    title={item.title}
                    desc={item.subheader}
                    price={item.price}
                    bed={item.bed}
                    bath={item.bath}
                    car={item.car}
                    area={item.area}
                    slug={item.slug}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NowSelling;
