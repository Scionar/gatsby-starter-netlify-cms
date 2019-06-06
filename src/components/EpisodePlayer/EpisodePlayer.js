import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { episodePlayerUrl } from '../../utils';
import './EpisodePlayer.scss';

/*
 * This component is going to be deprecated because of Player and
 * PlayerContainer components doing the player.
 */
const EpisodePlayer = ({ url, modifier, style }) => {
  return (
    <iframe
      className={classNames('episode-player', modifier)}
      style={style}
      src={episodePlayerUrl(url)}
      frameBorder="0"
      scrolling="no"
    />
  );
};

EpisodePlayer.propTypes = {
  url: PropTypes.string,
  modifier: PropTypes.string,
  style: PropTypes.object
};

export default EpisodePlayer;
