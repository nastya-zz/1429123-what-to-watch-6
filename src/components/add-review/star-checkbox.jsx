import PropTypes from "prop-types";
import React, {memo} from "react";

const StarCheckbox = ({i, active}) => {
  active = parseInt(active, 10);
  return (
    <>
      <input
        className="rating__input" id={`star-${i}`}
        type="radio"
        name="rating"
        value={i}
        defaultChecked={active === i}
      />
      <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
    </>
  );
};

StarCheckbox.propTypes = {
  i: PropTypes.number.isRequired,
  active: PropTypes.string.isRequired
};

export default memo(StarCheckbox);
