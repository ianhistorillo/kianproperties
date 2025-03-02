import cndconstants from "../../constants/CondominiumConstants";

const sliderChangeLotArea = (payload) => {
  return { type: cndconstants.SLIDER_CHANGE_LOT_AREA, payload };
};

export default sliderChangeLotArea;
