import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Howl } from 'howler';
import { connect } from 'react-redux';

import { episodePath, stripHtml, truncate, playerInstance } from '../utils';
import { Player } from '../components';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.mainButtonAction = this.mainButtonAction.bind(this);
    this.backButtonAction = this.backButtonAction.bind(this);
    this.initHowler = this.initHowler.bind(this);
    this.destroyHowler = this.destroyHowler.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.enableTimerUpdateInterval = this.enableTimerUpdateInterval.bind(this);
    this.disableTimerUpdateInterval = this.disableTimerUpdateInterval.bind(
      this
    );
    this.progressBarWidth = this.progressBarWidth.bind(this);

    this.timerUpdateInterval = null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.episodeUrl !== prevProps.episodeUrl) {
      if (this.props.episodeUrl) {
        this.initHowler();
      } else {
        this.destroyHowler();
      }
    }

    if (this.props.started && !this.props.paused) {
      this.play();
    }
  }

  initHowler() {
    playerInstance.destroy();

    if (!playerInstance.get()) {
      // Check if window is available
      if (this.props.episodeUrl) {
        playerInstance.init({
          src: this.props.episodeUrl,
          onload: () => {
            this.setState({
              duration: playerInstance.getDuration()
            });
          }
        });
      }
    }
  }

  destroyHowler() {
    playerInstance.destroy();
  }

  play() {
    if (!playerInstance.isPlaying()) {
      playerInstance.play(() => {
        this.props.play();
        this.props.setDuration();
      });
    }
  }

  pause() {
    playerInstance.pause(() => {
      this.props.pause();
      this.disableTimerUpdateInterval();
    });
  }

  updateTimer() {
    this.setState({
      timer: playerInstance.getRuntime()
    });
  }

  enableTimerUpdateInterval() {
    this.timerUpdateInterval = setInterval(this.updateTimer, 250);
  }

  disableTimerUpdateInterval() {
    clearTimeout(this.timerUpdateInterval);
  }

  mainButtonAction() {
    if (!this.props.started || this.props.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  backButtonAction() {
    playerInstance.rewind(() => {
      this.updateTimer();
    });
  }

  progressBarWidth() {
    return (this.props.runtime / this.props.duration) * 100;
  }

  render() {
    return (
      <Player
        modifier="player--sticky"
        started={this.props.started}
        paused={this.props.paused}
        mainButtonAction={this.mainButtonAction}
        backButtonAction={this.backButtonAction}
        timer={this.props.runtime}
        duration={this.props.duration}
        progressBarWidth={this.progressBarWidth()}
      />
    );
  }
}

const mapStateToProps = state => ({
  season: state.player.season,
  episode: state.player.episode,
  title: state.player.title,
  started: state.player.started,
  paused: state.player.paused,
  duration: state.player.duration,
  runtime: state.player.runtime,
  episodeUrl: state.player.episodeUrl
});

const mapDispatchToProps = dispatch => ({
  play: () =>
    dispatch({
      type: `PLAY`
    }),
  pause: () =>
    dispatch({
      type: `PAUSE`
    }),
  setDuration: () =>
    dispatch({
      type: `SET_DURATION`
    })
});

const PlayerContainerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);

export default PlayerContainerConnector;
