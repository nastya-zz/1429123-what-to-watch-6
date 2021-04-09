import React from "react";
import {useSelector} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../../constants/common";
import LogoLink from "../logo/logo-link";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({headerClass, children, history}) => {
  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);
  const user = useSelector(({USER}) => USER.user);

  const handleAvatarClick = () => {
    if (history.location.pathname === AppRoute.MY_LIST) {
      return;
    }
    history.push(`${AppRoute.MY_LIST}`);
  };

  return (
    <header className={headerClass}>
      <div className="logo">
        <LogoLink linkClassNames={`logo__link`} />
      </div>

      {children}

      <div className="user-block">
        {
          authorizationStatus === AuthorizationStatus.AUTH
            ?
            (<div className="user-block__avatar" onClick={() => handleAvatarClick()}>
              <img src={user.avatar_url} alt="User avatar" width="63" height="63"/>
            </div>)
            :
            <Link to='/login' className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};


Header.propTypes = {
  headerClass: PropTypes.string,
  children: PropTypes.node,
  history: PropTypes.object
};


export default Header;
