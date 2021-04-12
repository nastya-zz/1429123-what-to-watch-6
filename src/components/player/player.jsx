import React, {createRef, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findFilmById} from "../../utils/film";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const Player = ({history}) => {
  const {id} = useParams();
  const films = useSelector(({FILM}) => FILM.films);
  const film = findFilmById(id, films);
  const {previewImage, previewVideoLink} = film;
  const videoRef = createRef();
  const FULLSCREEN_BROWSER_METHODS = [`requestFullscreen`, `webkitRequestFullscreen`, `msRequestFullScreen`];
  const [isPlaying, setPLaying] = useState(true);


  const handlePlayClick = () => {
    setPLaying(!isPlaying);
  };
  const handleFullScreenClick = () => {
    // todo implement
  };

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [isPlaying]);


  return (
    <>
      <div className="player">
        <video
          ref={videoRef}
          src={previewVideoLink}
          className="player__video"
          poster={previewImage}
        />

        <button onClick={()=>history.goBack()} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100" />
              <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">

            <div className="player__name">Transpotting</div>

            <PlayButton isPlaying={isPlaying} onPlayBtnClick={handlePlayClick}/>

            <FullScreenButton onFullScreenBtnClick={handleFullScreenClick}/>
          </div>
        </div>
      </div>

    </>
  );
};

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

const FullScreenButton = ({onFullScreenBtnClick}) => {
  return (
    <button type="button" className="player__full-screen">
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" />
      </svg>
      <span>Full screen</span>
    </button>
  );
};

Player.propTypes = {
  history: PropTypes.object.isRequired
};

export default Player;
