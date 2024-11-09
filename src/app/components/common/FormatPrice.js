import React from "react";

const FormatPrice = (props) => {
  if (props.children !== null) {
    let price = props.children.toString();
    return price;
  } else {
    return null;
  }
};

// export the newly generated component
export default FormatPrice;
