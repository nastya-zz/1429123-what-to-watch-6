import React from 'react';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import Catalog from "./catalog";
import PropTypes from "prop-types";
import Promo from "./promo";

const Main = ({history}) => {


  return (<React.Fragment>
    <Promo history={history}/>

    <div className="page-content">
      <Catalog />
      <Footer />
    </div>
  </React.Fragment>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired
};

export default Main;
