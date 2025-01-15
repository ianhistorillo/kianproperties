import React from "react";

const FormatPrice = (props) => {
  if (props.children !== null) {
    // Convert the amount into millions
    const millions = props.children / 1_000_000;

    // Format to one decimal place, if necessary
    if (millions % 1 === 0) {
      // If it's an integer, just return the value without decimals
      return millions;
    } else {
      // If it's not an integer, return one decimal place
      return `${millions.toFixed(1)}M`;
    }
  } else {
    return null;
  }
};

// export the newly generated component
export default FormatPrice;
