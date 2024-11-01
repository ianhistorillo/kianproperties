import lfsconstants from "../../constants/LandConstants";

const bedSelectChange = (payload) => {
  return { type: lfsconstants.BED_SELECT_CHANGE, payload };
};

export default bedSelectChange;
