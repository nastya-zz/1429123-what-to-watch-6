import React from "react";
import {useSelector} from "react-redux";
import {AuthorizationStatus} from "../../../constants/common";
import HeaderAuth from "./header-auth";
import HeaderGuest from "./header-guest";

const Header = (props) => {
  const authorizationStatus = useSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.AUTH ? <HeaderAuth {...props} /> : <HeaderGuest {...props}/>
  );
};

export default Header;
