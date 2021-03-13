import React from "react";
import PropTypes from "prop-types";


const SignInMessage = ({message}) => {
  return (
    <>
      <div className="sign-in__message">
        <p>{message}</p>
      </div>
    </>
  );
};

SignInMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default SignInMessage;
