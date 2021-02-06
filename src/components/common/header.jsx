import React from "react";
import LogoLink from './logo-link';

const Header = ({headerClass, title}) => {
  return (
    <>
      <header className={headerClass}>
        <div className="logo">
          <LogoLink linkClassNames={`logo__link`} />
        </div>

        {title && <h1 className="page-title user-page__title">{title}</h1>}

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>
    </>
  );
};


export default Header;
