import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import PropTypes from "prop-types";

import "./Modal.css";

ModalHowToUse.propTypes = {
  closeModal: PropTypes.func.isRequired
};

function ModalHowToUse({ closeModal }) {
  return (
    <div className="ModalHowToUse" onClick={closeModal}>
      <div className="ModalHowToUse_modal">
        <h3 className="ModalHowToUse_heading">How to use</h3>
        <ul className="ModalHowToUse_instrucion">
          <li>Press on the input field.</li>
          <li>
            If underline change color to white, enter city name and press enter
          </li>
          <li>
            If you want more information about weather in selected city press
            the card
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actions.changeHowtoUseVisibility())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ModalHowToUse);
