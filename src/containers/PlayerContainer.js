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

    // Selected episode
    this.episode = this.props.data.allFeedAnchorFm.nodes.find(
      node => node.guid === this.props.guid
    );

    this.timerUpdateInterval = null;
  }

  componentDidMount() {
    this.initHowler();
  }

  componentDidUpdate(prevProps) {
    if (this.props.started && !this.props.paused) {
      playerInstance.play();
    }
  }

  initHowler() {
    playerInstance.destroy();

    if (!playerInstance.get()) {
      // Check if window is available
      playerInstance.init({
        src: this.episode.enclosure.url,
        onload: () => {
          this.setState({
            duration: playerInstance.getDuration()
          });
        }
      });
    }
  }

  destroyHowler() {
    playerInstance.destroy();
  }

  play() {
    playerInstance.play(() => {
      this.props.play();
      this.props.setDuration();
    });
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
        style={{ marginTop: '1rem' }}
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
  runtime: state.player.runtime
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

const PlayerContainerQuery = props => (
  <StaticQuery
    query={graphql`
      query PlayerContainerQuery {
        allFeedAnchorFm {
          nodes {
            guid
            title
            link
            enclosure {
              url
              length
              type
            }
          }
        }
      }
    `}
    render={data => <PlayerContainerConnector data={data} {...props} />}
  />
);

export default PlayerContainerQuery;
