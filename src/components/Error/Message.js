import React from "react";
import "./Message.css";

const ErrorMessage = () => {
  return (
    <div className="Error">
      <p>Whoops. We haven't data about weather in your city.</p>
    </div>
  );
};

export default ErrorMessage;
