import React from "react";
import LogoLink from '../logo/logo-link';
import PropTypes from "prop-types";

const HeaderAuth = ({headerClass, children}) => {
  return (
    <>
      <header className={headerClass}>
        <div className="logo">
          <LogoLink linkClassNames={`logo__link`} />
        </div>

        {children}

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>
    </>
  );
};

HeaderAuth.propTypes = {
  headerClass: PropTypes.string,
  children: PropTypes.node
};


export default HeaderAuth;
