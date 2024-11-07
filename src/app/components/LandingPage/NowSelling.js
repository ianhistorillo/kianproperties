"use client";

//react-redux
import { connect } from "react-redux";

import Image from "next/image";
import SearchFilter from "@/app/land-for-sale/SearchFilter";
import ForSaleCard from "../UI/ForSaleCard";

const NowSelling = (props) => {
  const itemKeys = Object.values(props.nowselling);
  if (itemKeys.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="now-selling-page">
        <div className="i-col100 now-selling-title">
          <h1> NOW SELLING </h1>
          <span className="underline"></span>
        </div>
        <div className="i-col100 now-selling-section">
          <div className="i-col100 i-fl">
            <div className="now-selling-filter">
              <SearchFilter />
            </div>
          </div>
          <div className="i-col100 i-fl">
            <div className="now-selling-section-list">
              {itemKeys.toReversed().map((item, idx) => {
                return (
                  <ForSaleCard
                    key={idx}
                    imageSrc={item.image_header}
                    title={item.title}
                    desc={item.subheader}
                    selling_type={item.selling_type}
                    monthly_rent={item.monthly_rent}
                    price={item.price}
                    bed={item.bed}
                    bath={item.bath}
                    car={item.car}
                    area={item.area}
                    slug={item.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    nowselling: state.nowselling.list || [],
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NowSelling);
