import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import playIcon from '../../img/play-icon.svg';
import './PlayButton.scss';

const PlayButton = ({ modifier, style, action }) => (
  <button
    className={classNames('play-button', modifier)}
    style={style}
    onClick={action}
  >
    <img className="play-button__icon" src={playIcon} alt={'Play episode'} />
    Play the episode
  </button>
);

PlayButton.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  action: PropTypes.func
};

export default PlayButton;
