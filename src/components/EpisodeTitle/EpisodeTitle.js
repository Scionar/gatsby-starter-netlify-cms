import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodeTitle.scss';

const EpisodeTitle = ({ modifier, style, children }) => {
  return (
    <h1 className={classNames('episode-title', modifier)} style={style}>
      {children}
    </h1>
  );
};

EpisodeTitle.propTypes = {
  children: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  style: PropTypes.object
};

export default EpisodeTitle;
