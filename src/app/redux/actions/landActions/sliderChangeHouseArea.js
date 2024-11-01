import lfsconstants from "../../constants/LandConstants";

const sliderChangeHouseArea = (payload) => {
  return { type: lfsconstants.SLIDER_CHANGE_HOUSE_AREA, payload };
};

export default sliderChangeHouseArea;
