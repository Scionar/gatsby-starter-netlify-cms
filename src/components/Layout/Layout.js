import React from "react";
import PropTypes from 'prop-types'

import "./Layout.scss";

const Layout = ({
  headerContentFirst,
  headerContentSecond,
  mainContentFirst,
  mainContentSecond,
  footer
}) => {
  return (
    <div class="layout">
      <div class="layout__header">
        <div class="layout__header-content-first">{headerContentFirst}</div>
        <div class="layout__header-content-second">{headerContentSecond}</div>
      </div>
      <div class="layout__main">
        <div class="layout__main-content-first">{mainContentFirst}</div>
        <div class="layout__main-content-second">{mainContentSecond}</div>
      </div>
      <div class="layout__footer">{footer}</div>
    </div>
  );
};

Layout.propTypes = {
    headerContentFirst: PropTypes.any,
    headerContentSecond: PropTypes.any,
    mainContentFirst: PropTypes.any,
    mainContentSecond: PropTypes.any,
    footer: PropTypes.any
};

export default Layout;
