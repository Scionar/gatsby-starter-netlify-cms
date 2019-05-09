import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./../../styles/base.scss";
import "./Header.scss";

const Header = ({ children, modifier, ...props }) => {
  return <div className={classNames("header", modifier)}>{children}</div>;
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
  modifier: PropTypes.string
};

export default Header;
