import React from "react";
import {useSelector} from "react-redux";
import {AuthorizationStatus} from "../../../constants/common";
import LogoLink from "../logo/logo-link";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({headerClass, children}) => {
  const authorizationStatus = useSelector((state) => state.authorizationStatus);
  const user = useSelector((state) => state.user);

  return (
    <header className={headerClass}>
      <div className="logo">
        <LogoLink linkClassNames={`logo__link`} />
      </div>

      {children}

      <div className="user-block">
        <div className="user-block__avatar">
          {
            authorizationStatus === AuthorizationStatus.AUTH
              ?
              <img src={user.avatar_url} alt="User avatar" width="63" height="63"/>
              :
              <Link to='/login' className="user-block__link">Sign in</Link>
          }
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  headerClass: PropTypes.string,
  children: PropTypes.node
};


export default Header;
