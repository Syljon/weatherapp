import React from "react";
import "./Form.css";
const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <div className="Form">
        <input
          type="text"
          className="Input"
          onChange={props.changed}
          value={props.value}
          placeholder="Enter city ..."
        />
      </div>
    </form>
  );
};

export default Form;
