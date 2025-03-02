import halconstants from "../../constants/HouseAndLotConstants";

const bedSelectChange = (payload) => {
  return { type: halconstants.BED_SELECT_CHANGE, payload };
};

export default bedSelectChange;
