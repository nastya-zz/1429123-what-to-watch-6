import {Link} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const LogoLink = ({linkClassNames}) => {
  return (
    <>
      <div className="logo">
        <Link to='/' className={linkClassNames}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
    </>
  );
};

LogoLink.propTypes = {
  linkClassNames: PropTypes.string,
};

export default LogoLink;
