import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import PropTypes from "prop-types";
import "./Icone.css";
HelpIcone.propTypes = {
  showHideModal: PropTypes.func.isRequired
};
function HelpIcone({ showHideModal }) {
  return (
    <button className="HelpIcone" onClick={showHideModal}>
      ?
    </button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showHideModal: () => {
      dispatch(actions.changeHowtoUseVisibility());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(HelpIcone);
