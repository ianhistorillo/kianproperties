import lfsconstants from "../../constants/LandConstants";

const resetClick = (payload) => {
  return { type: lfsconstants.RESET_CLICK, payload };
};

export default resetClick;
