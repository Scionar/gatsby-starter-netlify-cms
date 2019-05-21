import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodeDescription.scss';

const EpisodeDescription = ({ children, modifier, ...props }) => {
  return (
    <div className={classNames('episode-description', modifier)} {...props}>
      {children}
    </div>
  );
};

EpisodeDescription.propTypes = {
  children: PropTypes.element.isRequired,
  modifier: PropTypes.string
};

export default EpisodeDescription;
