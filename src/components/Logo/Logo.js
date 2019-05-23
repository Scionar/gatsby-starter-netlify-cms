import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import './Logo.scss';
import NPLogo from '../../img/np-logo.png';

const Logo = ({ modifier }) => (
  <Link className={classNames('logo', modifier)} to="/">
    <img className="logo__image" src={NPLogo} alt="Nudging Pixels" />
  </Link>
);

Logo.propTypes = {
  modifier: PropTypes.string
};

export default Logo;
