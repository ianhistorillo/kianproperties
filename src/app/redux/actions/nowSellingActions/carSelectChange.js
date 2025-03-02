import nsconstants from "../../constants/NowSellingConstants";

const carSelectChange = (payload) => {
  return { type: nsconstants.CAR_SELECT_CHANGE, payload };
};

export default carSelectChange;
