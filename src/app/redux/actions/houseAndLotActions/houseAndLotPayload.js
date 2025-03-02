import halconstants from "../../constants/HouseAndLotConstants";

const nowSellingPayload = (payload) => {
  return { type: halconstants.HOUSE_AND_LOT_PAYLOAD, payload };
};

export default nowSellingPayload;
