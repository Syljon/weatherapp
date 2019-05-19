import React from "react";
import PropTypes from "prop-types";

import "./Form.css";

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

function Form({ submit, changed, value, placeholder }) {
  return (
    <form onSubmit={submit}>
      <div className="Form">
        <input
          type="text"
          className="Input"
          onChange={changed}
          value={value}
          placeholder={placeholder ? placeholder : "Enter text ..."}
        />
      </div>
    </form>
  );
}
export default Form;
