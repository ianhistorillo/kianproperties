import nsconstants from "../../constants/NowSellingConstants";

const sliderChangeHouseArea = (payload) => {
  return { type: nsconstants.SLIDER_CHANGE_HOUSE_AREA, payload };
};

export default sliderChangeHouseArea;
