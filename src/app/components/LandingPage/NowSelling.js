"use client";
import { react, useState, useEffect } from "react";

//react-redux
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

// fetch thunk
import { fetchSellingData } from "@/app/redux/actions/thunks/loadDataThunk";

import Image from "next/image";
import SearchFilter from "@/app/land-for-sale/SearchFilter";
import ForSaleCard from "../UI/ForSaleCard";

const NowSelling = (props) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSellingData());
  }, [dispatch]);

  if (props.nowselling) {
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
              {props.nowselling.toReversed().map((item, idx) => {
                return (
                  <ForSaleCard
                    key={idx}
                    imageSrc={item.acf.image_header}
                    title={item.acf.title}
                    desc={item.acf.subheader}
                    selling_type={item.acf.selling_type}
                    monthly_rent={item.acf.monthly_rent}
                    price={item.acf.price}
                    bed={item.acf.bed}
                    bath={item.acf.bath}
                    car={item.acf.car}
                    area={item.acf.area}
                    slug={item.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  nowselling: state.nowselling.items,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NowSelling);
