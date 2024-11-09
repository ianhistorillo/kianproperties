"use client";
import { useState, useEffect, React, act } from "react";

//react-redux
import { connect } from "react-redux";

//other libraries or components
import FormatPrice from "../components/common/FormatPrice";
import MultiSlider from "multi-slider";

// action constants
import sliderChangeHouseArea from "../redux/actions/landActions/sliderChangeHouseArea";
import sliderChangeLotArea from "../redux/actions/landActions/sliderChangeLotArea";
import sliderChangePrice from "../redux/actions/landActions/sliderChangePrice";
import bedSelectChange from "../redux/actions/landActions/bedSelectChange";
import bathSelectChange from "../redux/actions/landActions/bathSelectChange";
import carSelectChange from "../redux/actions/landActions/carSelectChange";
import searchClick from "../redux/actions/landActions/searchClick";
import resetClick from "../redux/actions/landActions/resetClick";

const SearchFilter = (props) => {
  return (
    <div className="i-col100 i-fl">
      <div className="lfss-searchfilter">
        <div className="i-col33 i-fl i-padd">
          <DisplaySlider
            slider={props.sliders.price}
            values={props.search.price}
            type="price"
            onSliderChange={props.onPriceSliderChange}
          >
            PRICE
          </DisplaySlider>
          <DisplaySlider
            slider={props.sliders.houseArea}
            values={props.search.houseArea}
            type="sqrmeters"
            onSliderChange={props.onHouseAreaSliderChange}
          >
            HOUSE AREA
          </DisplaySlider>
          <DisplaySlider
            slider={props.sliders.floorArea}
            values={props.search.floorArea}
            type="sqrmeters"
            onSliderChange={props.onFloorAreaSliderChange}
          >
            FLOOR AREA
          </DisplaySlider>
        </div>
        <div className="i-col33 i-fl i-padd align-center">
          <DisplayButtonOptions
            options={props.search.bed.options}
            selected={props.search.bed.selected}
            onButtonClick={props.onBedButtonClick}
            addclass="hals-options-padd"
          >
            Beds
          </DisplayButtonOptions>
          <DisplayButtonOptions
            options={props.search.bath.options}
            selected={props.search.bath.selected}
            onButtonClick={props.onBathButtonClick}
            addclass="hals-options-pad"
          >
            Baths
          </DisplayButtonOptions>
          <DisplayButtonOptions
            options={props.search.car.options}
            selected={props.search.car.selected}
            onButtonClick={props.onCarButtonClick}
            addclass="hals-options-pad"
          >
            Cars
          </DisplayButtonOptions>
        </div>
        <div className="i-col33 i-fl i-padd">
          <DisplaySelectDropdown
            options={props.search.type.options}
            defaultValue={props.search.type.selected}
            selected={props.search.type.selected}
            onSelectChange={props.onTypeSelectChange}
            addclass="selector"
          >
            {" "}
            Type{" "}
          </DisplaySelectDropdown>
          <DisplaySelectDropdown
            options={props.search.location.options}
            defaultValue={props.search.location.selected}
            selected={props.search.location.selected}
            onSelectChange={props.onLocationSelectChange}
            addclass="hals-options-pad selector"
          >
            {" "}
            Location{" "}
          </DisplaySelectDropdown>
          <div className="i-col100 search-buttons hals-options-pad i-fl">
            <a
              href="#search"
              className="search"
              onClick={(e) => props.onClickSearch(e)}
            >
              <span>SEARCH</span>
            </a>
            <a
              href="#reset"
              className="reset"
              onClick={(e) => props.onClickReset(e)}
            >
              <span>RESET</span>
            </a>
          </div>
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
  return {
    search: state.nowselling.search,
    sliders: state.nowselling.sliders,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  onPriceSliderChange: (key) => {
    dispatch(sliderChangePrice(key));
  },
  onHouseAreaSliderChange: (key) => {
    dispatch(sliderChangeHouseArea(key));
  },
  onFloorAreaSliderChange: (key) => {
    dispatch(sliderChangeLotArea(key));
  },
  onBedButtonClick: (key) => {
    dispatch(bedSelectChange(key));
  },
  onBathButtonClick: (key) => {
    dispatch(bathSelectChange(key));
  },
  onCarButtonClick: (key) => {
    dispatch(carSelectChange(key));
  },
  onClickSearch: (e) => {
    e.preventDefault();
    dispatch(searchClick());
  },
  onClickReset: (e) => {
    e.preventDefault();
    dispatch(resetClick());
  },
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
