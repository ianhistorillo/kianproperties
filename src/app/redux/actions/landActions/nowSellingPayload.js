import lfsconstants from "../../constants/LandConstants";

const nowSellingPayload = (payload) => {
  return { type: lfsconstants.NOW_SELLING_PAYLOAD, payload };
};

export default nowSellingPayload;
