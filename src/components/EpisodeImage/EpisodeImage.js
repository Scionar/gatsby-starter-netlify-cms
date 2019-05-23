import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './EpisodeImage.scss';

const EpisodeImage = ({ modifier, style, src, alt }) => {
  return (
    <img
      className={classNames('episode-image', modifier)}
      style={style}
      src={src}
      alt={alt}
    />
  );
};

EpisodeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  style: PropTypes.object
};

export default EpisodeImage;
