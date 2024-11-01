import lfsconstants from "../../constants/LandConstants";

const sliderChangeLotArea = (payload) => {
  return { type: lfsconstants.SLIDER_CHANGE_LOT_AREA, payload };
};

export default sliderChangeLotArea;
