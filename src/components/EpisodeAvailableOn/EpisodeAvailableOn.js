import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodeAvailableOn.scss';

const EpisodeAvailableOn = ({ modifier, style, children }) => {
  return (
    <div className={classNames('episode-available-on', modifier)}>
      <div className="episode-available-on__header-container">
        <span className="episode-available-on__header">Available on...</span>
      </div>
      <ul className="episode-available-on__list">{children}</ul>
    </div>
  );
};

EpisodeAvailableOn.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ])
};

export default EpisodeAvailableOn;
