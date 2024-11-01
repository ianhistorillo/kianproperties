"use client";

// redux/actions/dataActions.js
export const fetchSellingData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    try {
      const response = await fetch(
        "http://localhost:8888/kianproperties/wp-json/wp/v2/posts/?acf_format=standard&per_page=100"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};
