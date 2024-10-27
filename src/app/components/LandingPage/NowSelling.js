"use client";
import { react, useState, useEffect } from "react";
import Image from "next/image";
import SearchFilter from "@/app/land-for-sale/SearchFilter";
import ForSaleCard from "../UI/ForSaleCard";

const NowSelling = () => {
  const [data, setData] = useState(null);

  async function getNowSellingData() {
    try {
      const response = await fetch(
        "http://localhost:8888/kianproperties/wp-json/wp/v2/posts/?acf_format=standard&per_page=100" // change this to live endpoint once deployed live
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
              {data.toReversed().map((item, idx) => {
                return (
                  <ForSaleCard
                    key={idx}
                    imageSrc={item.acf.image_header}
                    title={item.acf.title}
                    desc={item.acf.subheader}
                    selling_type={item.acf.selling_type}
                    monthly_rent={item.acf.monthly_rent}
                    price={item.acf.price}
                    bed={item.acf.bed}
                    bath={item.acf.bath}
                    car={item.acf.car}
                    area={item.acf.area}
                    slug={item.id}
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
