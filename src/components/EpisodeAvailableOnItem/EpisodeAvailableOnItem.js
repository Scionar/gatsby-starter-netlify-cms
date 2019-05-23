import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodeAvailableOnItem.scss';

const EpisodeAvailableOnItem = ({ modifier, style, name, link }) => (
  <li className={classNames('episode-available-on-item', modifier)}>
    <a className="episode-available-on-item__link" href={link}>
      {name}
    </a>
  </li>
);

EpisodeAvailableOnItem.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string
};

export default EpisodeAvailableOnItem;
