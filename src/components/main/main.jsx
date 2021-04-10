import React from 'react';
import Footer from "../common/footer/footer";
import Catalog from "./catalog";
import PropTypes from "prop-types";
import Promo from "./promo";

const Main = ({history}) => {
  return (<React.Fragment>
    <Promo history={history}/>

    <div className="page-content">
      <Catalog history={history} />
      <Footer />
    </div>
  </React.Fragment>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired
};

export default Main;
