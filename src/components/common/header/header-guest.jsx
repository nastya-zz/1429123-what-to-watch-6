import React from "react";
import {Link} from "react-router-dom";
import LogoLink from "../logo/logo-link";

const HeaderGuest = () => {
  return (
    <>
      <header className="page-header">
        <div className="logo">
          <LogoLink linkClassNames={`logo__link`} />
        </div>

        <div className="user-block">
          <Link to='/login' className="user-block__link">Sign in</Link>
        </div>
      </header>
    </>
  );
};

export default HeaderGuest;
