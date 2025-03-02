import cndconstants from "../../constants/CondominiumConstants";

const bedSelectChange = (payload) => {
  return { type: cndconstants.BED_SELECT_CHANGE, payload };
};

export default bedSelectChange;
