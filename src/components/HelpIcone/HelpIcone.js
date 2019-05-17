import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./HelpIcone.css";
const HelpIcone = props => {
  return (
    <button className="HelpIcone" onClick={props.showModal}>
      ?
    </button>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    showModal: () => {
      console.log("DDDD");
      dispatch(actions.changeHowtoUseVisibility());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(HelpIcone);
