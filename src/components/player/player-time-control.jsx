import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

const PlayerTimeControl = ({isPlaying, runTime}) => {
  const [progress, setProgress] = useState(0);
  const [usedTime, setUsedTime] = useState(0);
  const [remainTime, setRemainTime] = useState(runTime);

  const countProgress = (time) => {
    const progressPercent = (time / runTime) * 100;
    setProgress(progressPercent);
  };
  const countTime = () => {
    setUsedTime((prev) => prev + 1);
    setRemainTime((prev) => prev - 1);
  };

  const formatRemainTime = (timestamp) => {
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - (hours * 60);
    const seconds = timestamp % 60;


    return [
      hours.toString().padStart(2, `0`),
      minutes.toString().padStart(2, `0`),
      seconds.toString().padStart(2, `0`)
    ].join(`:`);
  };

  let intervalId;

  useEffect(() => {
    if (usedTime > runTime) {
      clearInterval(intervalId);
    } else {
      countProgress(usedTime);
    }
  }, [usedTime]);


  useEffect(() => {
    if (!isPlaying) {
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else {
      intervalId = setInterval(() => {
        countTime();
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying]);


  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100" />
        <div className="player__toggler" style={{left: progress + `%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{formatRemainTime(remainTime)}</div>
    </div>
  );
};

PlayerTimeControl.propTypes = {
  runTime: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default PlayerTimeControl;
