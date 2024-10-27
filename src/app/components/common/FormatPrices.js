import React from "react";

const FormatPrices = (props) => {
  if (props.children !== null) {
    let price = parseInt(props.children);
    let text = "₱" + price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, "$1,");
    return text;
  } else {
    return null;
  }
};

// export the newly generated component
export default FormatPrices;
