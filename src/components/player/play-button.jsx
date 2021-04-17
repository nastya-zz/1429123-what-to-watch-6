import React from "react";
import PropTypes from "prop-types";

const PlayButton = ({isPlaying, onPlayBtnClick}) => {
  return (
    <button type="button" className="player__play" onClick={onPlayBtnClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        {isPlaying ? <use xlinkHref="#pause"/> : <use xlinkHref="#play-s"/>}
      </svg>
      <span>{isPlaying ? `Pause` : `Play`}</span>
    </button>
  );
};

PlayButton.propTypes = {
  onPlayBtnClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default PlayButton;
