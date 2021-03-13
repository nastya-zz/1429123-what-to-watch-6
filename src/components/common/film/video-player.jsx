import React, {createRef, useEffect} from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {previewVideoLink, previewImage, isPlaying, ...restProps} = props;
  const videoRef = createRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.load();

  }, [isPlaying]);

  return (
    <video
      crossOrigin="anonymous"
      ref={videoRef}
      src={previewVideoLink}
      className="player__video"
      poster={previewImage}
      {...restProps}
    />
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
