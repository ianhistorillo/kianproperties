"use client";
import landPayload from "../landActions/landPayload";
import nowSellingPayload from "../nowSellingActions/nowSellingPayload";
import houseAndLotPayload from "../houseAndLotActions/houseAndLotPayload";
import condominiumPayload from "../condominiumActions/condominiumPayload";

// redux/actions/dataActions.js
export const fetchSellingData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://mediumslateblue-otter-668926.hostingersite.com/wp-json/wp/v2/posts/?acf_format=standard&per_page=100"
      );
      const data = await response.json();
      // Filter by property_type (for example, "lot")

      const lotData = data.filter((post) => post.acf.property_type === "lot");

      const houseAndLotData = data.filter(
        (post) => post.acf.property_type === "house and lot"
      );

      const condoData = data.filter(
        (post) => post.acf.property_type === "condominium"
      );

      const result = {
        nowselling: {
          list: data.reverse().reduce((acc, element, index) => {
            acc[index] = element.acf;
            return acc;
          }, {}),
          search: await getSearchCriteria(),
        },
        lotforsale: {
          list: lotData.reverse().reduce((acc, element, index) => {
            acc[index] = element.acf;
            return acc;
          }, {}),
          search: await getSearchCriteria(),
        },
        houseandlot: {
          list: houseAndLotData.reverse().reduce((acc, element, index) => {
            acc[index] = element.acf;
            return acc;
          }, {}),
          search: await getSearchCriteria(),
        },
        condominium: {
          list: condoData.reverse().reduce((acc, element, index) => {
            acc[index] = element.acf;
            return acc;
          }, {}),
          search: await getSearchCriteria(),
        },
      };

      dispatch(nowSellingPayload(result.nowselling));
      dispatch(landPayload(result.lotforsale));
      dispatch(houseAndLotPayload(result.houseandlot));
      dispatch(condominiumPayload(result.condominium));
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};

async function getSearchCriteria() {
  try {
    const searchResponse = await fetch("/api/search-criteria"); // Fetch data from the API
    if (!searchResponse.ok) {
      throw new Error(`HTTP error! status: ${searchResponse.status}`);
    }
    const ddata = await searchResponse.json(); // Make sure the response is JSON
    return ddata;
  } catch (error) {
    console.error("Error fetching search criteria:", error);
    return null;
  }
}
