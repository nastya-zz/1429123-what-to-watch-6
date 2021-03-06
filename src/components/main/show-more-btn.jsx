import React from "react";
import PropTypes from "prop-types";

const ShowMoreBtn = (props) => {
  const {handleBtnClick} = props;


  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={handleBtnClick} type="button">Show more</button>
    </div>
  );
};

ShowMoreBtn.propTypes = {
  handleBtnClick: PropTypes.func.isRequired
};

export default ShowMoreBtn;
