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
      ref={videoRef}
      className="player__video"
      poster={previewImage}
      {...restProps}
    >
      <source src={previewVideoLink}/>
    </video>
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
