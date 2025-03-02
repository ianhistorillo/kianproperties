import nsconstants from "../../constants/NowSellingConstants";

const sliderChangeLotArea = (payload) => {
  return { type: nsconstants.SLIDER_CHANGE_LOT_AREA, payload };
};

export default sliderChangeLotArea;
