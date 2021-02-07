import React from "react";
import LogoLink from "./logo-link";

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <div className="logo">
          <LogoLink linkClassNames={`logo__link logo__link--light`}/>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
