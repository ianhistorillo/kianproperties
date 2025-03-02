import nsconstants from "../../constants/NowSellingConstants";

const bedSelectChange = (payload) => {
  return { type: nsconstants.BED_SELECT_CHANGE, payload };
};

export default bedSelectChange;
