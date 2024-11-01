import lfsconstants from "../../constants/LandConstants";

const typeSelectChange = (payload) => {
  return { type: lfsconstants.TYPE_SELECT_CHANGE, payload };
};

export default typeSelectChange;
