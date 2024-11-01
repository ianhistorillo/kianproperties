import lfsconstants from "../../constants/LandConstants";

const bathSelectChange = (payload) => {
  return { type: lfsconstants.BATH_SELECT_CHANGE, payload };
};

export default bathSelectChange;
