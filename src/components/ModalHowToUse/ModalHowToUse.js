import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./ModalHowToUse.css";
const ModalHowToUse = props => {
  return (
    <div className="ModalHowToUse">
      <div className="Modal">
        <button onClick={props.closeModal} className="btn">
          X
        </button>
        <h3>How to use</h3>
        <p>
          Enter name of city you want to know somthing i test text btw heere
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actions.changeHowtoUseVisibility())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ModalHowToUse);
