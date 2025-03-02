import halconstants from "../../constants/HouseAndLotConstants";

const sliderChangeHouseArea = (payload) => {
  return { type: halconstants.SLIDER_CHANGE_HOUSE_AREA, payload };
};

export default sliderChangeHouseArea;
