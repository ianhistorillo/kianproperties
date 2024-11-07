"use client";
import { useState } from "react";
import lfsconstants from "../../constants/LandConstants";
import nowSellingPayload from "../landActions/nowSellingPayload";

// redux/actions/dataActions.js
export const fetchSellingData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://localhost:8888/kianproperties/wp-json/wp/v2/posts/?acf_format=standard&per_page=100"
      );
      const data = await response.json();

      const result = {
        nowselling: {
          list: data.reduce((acc, element, index) => {
            acc[index] = element.acf;
            return acc;
          }, {}),
          search: await getSearchCriteria(),
        },
      };

      dispatch(nowSellingPayload(result.nowselling));
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
