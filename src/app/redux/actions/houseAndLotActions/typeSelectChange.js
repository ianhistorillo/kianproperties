import halconstants from "../../constants/HouseAndLotConstants";

const typeSelectChange = (payload) => {
  return { type: halconstants.TYPE_SELECT_CHANGE, payload };
};

export default typeSelectChange;
