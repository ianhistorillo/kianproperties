import lfsconstants from "../../constants/LandConstants";

const carSelectChange = (payload) => {
  return { type: lfsconstants.CAR_SELECT_CHANGE, payload };
};

export default carSelectChange;
