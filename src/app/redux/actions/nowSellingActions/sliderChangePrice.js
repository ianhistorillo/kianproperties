import nsconstants from "../../constants/NowSellingConstants";

const sliderChangePrice = (payload) => {
  return { type: nsconstants.SLIDER_CHANGE_PRICE, payload };
};

export default sliderChangePrice;
