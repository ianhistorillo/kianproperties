import halconstants from "../../constants/HouseAndLotConstants";

const resetClick = (payload) => {
  return { type: halconstants.RESET_CLICK, payload };
};

export default resetClick;
