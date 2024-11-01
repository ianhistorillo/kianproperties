import lfsconstants from "../../constants/LandConstants";

const sliderChangePrice = (payload) => {
  return { type: lfsconstants.SLIDER_CHANGE_PRICE, payload };
};

export default sliderChangePrice;
