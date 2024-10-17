import React from "react";

const FormatPrice = (props) => {
  if (props.children !== null) {
    let price = props.children.toString();
    price = price.substring(0, 3);
    // price = parseInt(price);
    price = price + "K";
    return price;
  } else {
    return null;
  }
};

// export the newly generated component
export default FormatPrice;
