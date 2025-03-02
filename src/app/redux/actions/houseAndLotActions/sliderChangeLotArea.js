import halconstants from "../../constants/HouseAndLotConstants";

const sliderChangeLotArea = (payload) => {
  return { type: halconstants.SLIDER_CHANGE_LOT_AREA, payload };
};

export default sliderChangeLotArea;
