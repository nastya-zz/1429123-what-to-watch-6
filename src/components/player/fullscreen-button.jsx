import React from "react";
import PropTypes from "prop-types";

const FullScreenButton = ({onFullScreenBtnClick}) => {
  return (
    <button type="button" className="player__full-screen" onClick={onFullScreenBtnClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" />
      </svg>
      <span>Full screen</span>
    </button>
  );
};

FullScreenButton.propTypes = {
  onFullScreenBtnClick: PropTypes.func.isRequired
};

export default FullScreenButton;
