"use client";

//styles
import "../../styles/_main.scss";
import "../../styles/components/_pages.scss";

//redux
import { connect } from "react-redux";

//component
import LandPages from "@/app/components/pages/LandPages";

const Land = ({ params, filteredlist }) => {
  let itemSelling = Object.values(filteredlist);

  const goBack = (e) => {
    e.preventDefault();
    setTimeout(() => {
      history.back();
      document.querySelector(".now-selling-page").scrollIntoView();
    }, 100);
  };

  return (
    <div className="for-sale-detail">
      <div className="i-col100 i-fl margin-bot">
        {" "}
        <a href="/" onClick={(e) => goBack(e)}>
          <span> {"<"} </span>
          <span>BACK </span>
        </a>
        {itemSelling.length > 0 ? <LandPages slug={params.slug[0]} /> : null}
      </div>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    filteredlist: state.nowselling.filteredlist || [],
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Land);
