import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Footer.scss";

const Footer = ({ children, modifier, ...props }) => {
  return <div className={classNames("footer", modifier)}>{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.element.isRequired,
  modifier: PropTypes.string
};

export default Footer;
