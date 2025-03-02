import halconstants from "../../constants/HouseAndLotConstants";

const carSelectChange = (payload) => {
  return { type: halconstants.CAR_SELECT_CHANGE, payload };
};

export default carSelectChange;
