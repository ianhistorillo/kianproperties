import nsconstants from "../../constants/NowSellingConstants";

const nowSellingPayload = (payload) => {
  return { type: nsconstants.NOW_SELLING_PAYLOAD, payload };
};

export default nowSellingPayload;
