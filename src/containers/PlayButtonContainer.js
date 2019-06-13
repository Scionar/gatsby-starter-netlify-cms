import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playerInstance } from '../utils';
import { PlayButton } from '../components';

class PlayButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.action = this.action.bind(this);
  }

  action() {
    this.props.playEpisode(
      this.props.season,
      this.props.episode,
      this.props.title,
      this.props.episodeUrl
    );
  }

  render() {
    return <PlayButton style={{ marginTop: '2rem' }} action={this.action} />;
  }
}

const mapDispatchToProps = dispatch => ({
  playEpisode: (season, episode, title, episodeUrl) => {
    dispatch({
      type: `SET_EPISODE`,
      season,
      episode,
      title,
      episodeUrl
    });
    dispatch({
      type: `PLAY`
    });
    dispatch({
      type: `SET_DURATION`,
      duration: playerInstance.getDuration()
    });
  }
});

const PlayButtonContainerConnector = connect(
  undefined,
  mapDispatchToProps
)(PlayButtonContainer);

export default PlayButtonContainerConnector;
