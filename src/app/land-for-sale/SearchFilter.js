"use client";
import { useState, useEffect, React } from "react";

//react-redux
import { connect } from "react-redux";

//other libraries or components
import FormatPrice from "../components/common/FormatPrice";
import MultiSlider from "multi-slider";

const SearchFilter = (props) => {
  const onBedButtonClick = () => {
    console.log("test");
  };

  const onBathButtonClick = () => {
    console.log("test");
  };

  const onCarButtonClick = () => {
    console.log("test");
  };

  const onLocationSelectChange = () => {
    console.log("test");
  };

  return (
    <div className="i-col100 i-fl">
      <div className="lfss-searchfilter">
        <div className="i-col33 i-fl i-padd">
          <DisplaySlider
            slider={props.sliders.price}
            values={props.search[0].price}
            type="price"
            onSliderChange={props.onPriceSliderChange}
          >
            PRICE
          </DisplaySlider>
          <DisplaySlider
            slider={props.sliders.houseArea}
            values={props.search[0].area}
            type="sqrmeters"
            onSliderChange={props.onAreaSliderChange}
          >
            HOUSE AREA
          </DisplaySlider>
          <DisplaySlider
            slider={props.sliders.floorArea}
            values={props.search[0].area}
            type="sqrmeters"
            onSliderChange={props.onFrontageSliderChange}
          >
            FLOOR AREA
          </DisplaySlider>
        </div>
        <div className="i-col33 i-fl i-padd align-center">
          <DisplayButtonOptions
            options={props.search[0].bed.options}
            selected={props.search[0].bed.selected}
            onButtonClick={onBedButtonClick}
            addclass="hals-options-padd"
          >
            Beds
          </DisplayButtonOptions>
          <DisplayButtonOptions
            options={props.search[0].bath.options}
            selected={props.search[0].bath.selected}
            onButtonClick={onBathButtonClick}
            addclass="hals-options-pad"
          >
            Baths
          </DisplayButtonOptions>
          <DisplayButtonOptions
            options={props.search[0].car.options}
            selected={props.search[0].car.selected}
            onButtonClick={onCarButtonClick}
            addclass="hals-options-pad"
          >
            Cars
          </DisplayButtonOptions>
        </div>
        <div className="i-col33 i-fl i-padd">
          <DisplaySelectDropdown
            options={props.search[0].type.options}
            defaultValue={props.search[0].type.selected}
            selected={props.search[0].type.selected}
            onSelectChange={onLocationSelectChange}
            addclass="selector"
          >
            {" "}
            Type{" "}
          </DisplaySelectDropdown>
          <DisplaySelectDropdown
            options={props.search[0].location.options}
            defaultValue={props.search[0].location.selected}
            selected={props.search[0].location.selected}
            onSelectChange={onLocationSelectChange}
            addclass="hals-options-pad selector"
          >
            {" "}
            Location{" "}
          </DisplaySelectDropdown>
          <div className="i-col100 search-buttons hals-options-pad i-fl">
            <div className="search"> SEARCH </div>
          </div>
          <div className="search-buttons"></div>
        </div>
        <div className="i-col100 i-fl"></div>
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

const DisplayButtonOptions = (props) => {
  return (
    <div
      className={`i-col100 hals-options i-posr ${props.addclass} padd-left-2rem i-fl`}
    >
      <div className="hals-options hals-options-title i-posr">
        {props.children}
      </div>
      {props.options.map((option, idx) => {
        const selected = option === props.selected.toString() ? "selected" : "";
        const display = parseInt(option, 10) === 0 ? "All" : `${option}+`;
        return (
          <div
            className={`hals-options hals-options-option ${selected}`}
            key={idx}
            onClick={(e) => props.onButtonClick(option)}
          >
            <div className="hals-options-circle">{display}</div>
          </div>
        );
      })}
    </div>
  );
};

const DisplaySelectDropdown = (props) => {
  let optionName = "";
  return (
    <div className={`i-col100 hals-options i-posr ${props.addclass} i-fl`}>
      <div className="hals-options hals-options-title">{props.children}</div>
      <div className="hals-options hals-options-select i-posr">
        <select
          className="hals-select"
          onChange={(e) => props.onSelectChange(e.target.value)}
        >
          {props.options.map((option, idx) => {
            if (option === props.selected) {
              return (
                <option key={idx} value={option} selected>
                  {option}
                </option>
              );
            } else {
              return (
                <option key={idx} value={option}>
                  {option}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    search: Object.values(state.nowselling.search) || [],
    sliders: state.nowselling.sliders || [],
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
