import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import HoustonLogo from "../../img/houston-logo.svg";
import "./HoustonAd.scss";

const HoustonAd = ({ modifier }) => (
  <div className={classNames("houston-ad", modifier)}>
    <img className="houston-ad__logo" src={HoustonLogo} alt="Houston Inc." />
    <a
      className="houston-ad__link"
      href="https//www.houston-inc.com"
      alt="Houston Inc. website"
    >
      wwww.houston-inc.com
    </a>
  </div>
);

HoustonAd.propTypes = {
  modifier: PropTypes.string
};

export default HoustonAd;
