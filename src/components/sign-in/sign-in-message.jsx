import React from "react";


const SignInMessage = ({message}) => {
  return (
    <>
      <div className="sign-in__message">
        <p>{message}</p>
      </div>
    </>
  );
};

export default SignInMessage;
