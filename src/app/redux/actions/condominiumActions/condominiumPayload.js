import cndconstants from "../../constants/CondominiumConstants";

const condominiumPayload = (payload) => {
  return { type: cndconstants.CONDOMINIUM_PAYLOAD, payload };
};

export default condominiumPayload;
