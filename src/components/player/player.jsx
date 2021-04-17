import React, {createRef, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findFilmById} from "../../utils/film";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import PlayerTimeControl from "./player-time-control";
import PlayButton from "./play-button";
import FullScreenButton from "./fullscreen-button";

const BrowserMethods = {
  REQUEST_FULLSCREEN: [`requestFullscreen`, `webkitRequestFullscreen`, `msRequestFullScreen`],
  EXIT_FULLSCREEN: [`exitFullscreen`, `webkitExitFullscreen`, `mozCancelFullScreen`, `msExitFullscreen`]
};

const Player = ({history}) => {
  const {id} = useParams();
  const films = useSelector(({FILM}) => FILM.films);
  const film = findFilmById(id, films);
  const {previewImage, previewVideoLink, runTime} = film;
  const videoRef = createRef();
  const [isPlaying, setPLaying] = useState(true);

  const handleExitButton = () => {
    setPLaying(false);
    history.goBack();
  };

  const handlePlayClick = () => {
    setPLaying(!isPlaying);
  };

  const handleFullScreenClick = () => {
    const fullScreenMethod = BrowserMethods.REQUEST_FULLSCREEN.find((method) => videoRef.current[method]);
    videoRef.current[fullScreenMethod]();
  };

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current.onended = () => {
      const exitScreenMethod = BrowserMethods.EXIT_FULLSCREEN.find((method) => videoRef.current[method]);
      videoRef.current[exitScreenMethod]();

      setPLaying(false);
    };
  }, []);


  return (
    <>
      <div className="player">
        <video
          ref={videoRef}
          src={previewVideoLink}
          className="player__video"
          poster={previewImage}
        />

        <button onClick={handleExitButton} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <PlayerTimeControl runTime={runTime} isPlaying={isPlaying} progressPercent={30}/>

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


Player.propTypes = {
  history: PropTypes.object.isRequired
};

export default Player;
