import lfsconstants from "../../constants/LandConstants";

const nowSellingPayload = (payload) => {
  return { type: lfsconstants.LAND_PAYLOAD, payload };
};

export default nowSellingPayload;
