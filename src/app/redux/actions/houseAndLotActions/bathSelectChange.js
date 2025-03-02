import halconstants from "../../constants/HouseAndLotConstants";

const bathSelectChange = (payload) => {
  return { type: halconstants.BATH_SELECT_CHANGE, payload };
};

export default bathSelectChange;
