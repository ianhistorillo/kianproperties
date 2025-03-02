import cndconstants from "../../constants/CondominiumConstants";

const sliderChangePrice = (payload) => {
  return { type: cndconstants.SLIDER_CHANGE_PRICE, payload };
};

export default sliderChangePrice;
