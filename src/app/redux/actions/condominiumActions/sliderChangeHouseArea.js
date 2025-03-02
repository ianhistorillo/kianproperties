import cndconstants from "../../constants/CondominiumConstants";

const sliderChangeHouseArea = (payload) => {
  return { type: cndconstants.SLIDER_CHANGE_HOUSE_AREA, payload };
};

export default sliderChangeHouseArea;
