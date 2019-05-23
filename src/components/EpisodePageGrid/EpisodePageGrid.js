import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodePageGrid.scss';

const EpisodePageGrid = ({ modifier, firstCell, secondCell }) => (
  <div className={classNames('episode-page-grid', modifier)}>
    <div className="episode-page-grid__first-cell">{firstCell}</div>
    <div className="episode-page-grid__second-cell">{secondCell}</div>
  </div>
);

EpisodePageGrid.propTypes = {
  firstCell: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ]),
  secondCell: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ]),
  modifier: PropTypes.string
};

export default EpisodePageGrid;
