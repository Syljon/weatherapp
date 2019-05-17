import React from "react";
import PropTypes from "prop-types";
import "./Form.css";
const Form = props => {
  const { submit, changed, value } = props;
  return (
    <form onSubmit={submit}>
      <div className="Form">
        <input
          type="text"
          className="Input"
          onChange={changed}
          value={value}
          placeholder="Enter city ..."
        />
      </div>
    </form>
  );
};
Form.propTypes = {
  submit: PropTypes.func,
  changed: PropTypes.func,
  value: PropTypes.string
};
export default Form;
