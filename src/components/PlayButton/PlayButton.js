import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PlayButton.scss';

const PlayButton = ({ modifier, style, action }) => (
  <button className={classNames('play-button', modifier)} onClick={action}>
    Play
  </button>
);

PlayButton.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  action: PropTypes.func
};

export default PlayButton;
