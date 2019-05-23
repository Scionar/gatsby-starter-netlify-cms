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
  // Notrequired because content can be put in "dangeroysly" injecting HTML.
  children: PropTypes.element,
  modifier: PropTypes.string
};

export default EpisodeDescription;
