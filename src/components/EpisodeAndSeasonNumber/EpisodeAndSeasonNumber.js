import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodeAndSeasonNumber.scss';

const EpisodeAndSeasonNumber = ({
  modifier,
  style,
  date,
  seasonNumber,
  EpisodeNumber
}) => (
  <span
    className={classNames('episode-and-season-number', modifier)}
    style={style}
  >
    {date} - Season {seasonNumber} Episode {EpisodeNumber}
  </span>
);

EpisodeAndSeasonNumber.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  date: PropTypes.string,
  seasonNumber: PropTypes.string,
  EpisodeNumber: PropTypes.string
};

export default EpisodeAndSeasonNumber;
