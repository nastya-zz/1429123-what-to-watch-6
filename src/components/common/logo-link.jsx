import {Link} from "react-router-dom";
import React from "react";

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

export default LogoLink;
