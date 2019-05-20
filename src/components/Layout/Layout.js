import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './../../styles/base.scss';
import './Layout.scss';

const Layout = ({ children, modifier, ...props }) => {
  return (
    <div className={classNames('layout', modifier)}>
      <div className="layout__content">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ]),
  modifier: PropTypes.string
};

export default Layout;
