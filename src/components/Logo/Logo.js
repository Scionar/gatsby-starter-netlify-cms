import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import './Logo.scss';

const Logo = ({ modifier, style, image }) => (
  <Link className={classNames('logo', modifier)} to="/" style={style}>
    <img className="logo__image" src={image} alt="Nudging Pixels" />
  </Link>
);

Logo.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string
};

export default Logo;
