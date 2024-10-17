"use client";
import { useState, useEffect, React } from "react";
import FormatPrice from "../components/common/FormatPrice";
import MultiSlider from "multi-slider";

const SearchFilter = (props) => {
  const [data, setData] = useState(null);

  async function getSearchCriteria() {
    try {
      const response = await fetch("/api/search-criteria"); // Fetch data from the API
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
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="i-col100 i-fl">
      <div className="lfss-searchfilter">
        <div className="i-col33 i-fl">
          <DisplaySlider
            slider={data.sliders.price}
            values={data.search.price}
            type="price"
            onSliderChange={props.onPriceSliderChange}
          >
            PRICE
          </DisplaySlider>
        </div>
        <div className="i-col33 i-fl">
          <DisplaySlider
            slider={data.sliders.area}
            values={data.search.area}
            type="sqrmeters"
            onSliderChange={props.onAreaSliderChange}
          >
            AREA
          </DisplaySlider>
        </div>
        <div className="i-col33 i-fl">
          <DisplaySlider
            slider={data.sliders.frontage}
            values={data.search.frontage}
            type="sqrmeters"
            onSliderChange={props.onFrontageSliderChange}
          >
            FRONTAGE
          </DisplaySlider>
        </div>
        <div className="i-col100 i-fl">
          <div className="search-buttons">
            <div className="search"> SEARCH </div>
          </div>
          <div className="search-buttons"></div>
        </div>
      </div>
    </div>
  );
};

const DisplaySlider = (props) => {
  return (
    <div className="">
      <div className="lfss-slidertext wd-70">
        <div className="lfss-mar lfss-slidertitle">{props.children}</div>
      </div>
      <div className="lfss-slider">
        <MultiSlider
          colors={["#631F44", "#631F44 ", "#631F44"]}
          values={[props.slider.start, props.slider.middle, props.slider.end]}
          onChange={props.onSliderChange}
          handleSize={12}
          height={40}
          handleInnerDotSize={10.4}
        />
      </div>
      <div className="lfss-mar desktopSliderValues">
        <DisplayValues
          type={props.type}
          low={props.values.current.low}
          high={props.values.current.high}
        />
      </div>
    </div>
  );
};

const DisplayValues = (props) => {
  switch (props.type) {
    case "price":
      return (
        <div className="lfss-slidervalues">
          <span className="low">
            <FormatPrice>{props.low}</FormatPrice>
          </span>
          <span className="high">
            <FormatPrice>{props.high}</FormatPrice>
          </span>
        </div>
      );
      break;
    case "sqrmeters":
      return (
        <div className="lfss-slidervalues">
          <span className="low">
            {props.low}m<sup>2</sup>
          </span>
          <span className="high">
            {props.high}m<sup>2</sup>
          </span>
        </div>
      );
      break;
    case "meters":
      return (
        <div className="lfss-slidervalues">
          <span className="low"> {props.low}m </span>
          <span className="high"> {props.high}m </span>
        </div>
      );
      break;
    default:
      return null;
  }
};

export default SearchFilter;
