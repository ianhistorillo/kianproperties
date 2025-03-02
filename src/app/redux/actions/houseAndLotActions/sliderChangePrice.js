import halconstants from "../../constants/HouseAndLotConstants";

const sliderChangePrice = (payload) => {
  return { type: halconstants.SLIDER_CHANGE_PRICE, payload };
};

export default sliderChangePrice;
