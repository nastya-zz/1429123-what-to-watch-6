import React from "react";
import LogoLink from '../logo/logo-link';
import PropTypes from "prop-types";

const Header = ({headerClass, children}) => {
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

Header.propTypes = {
  headerClass: PropTypes.string,
  children: PropTypes.node
};


export default Header;
