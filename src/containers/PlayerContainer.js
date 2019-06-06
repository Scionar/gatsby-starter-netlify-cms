import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Howl } from 'howler';

import { episodePath, stripHtml, truncate } from '../utils';
import { Player } from '../components';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      paused: false,
      timer: 0,
      duration: 0
    };

    this.mainButtonAction = this.mainButtonAction.bind(this);
    this.backButtonAction = this.backButtonAction.bind(this);
    this.initHowler = this.initHowler.bind(this);
    this.destroyHowler = this.destroyHowler.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.rewind = this.rewind.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.enableTimerUpdateInterval = this.enableTimerUpdateInterval.bind(this);
    this.disableTimerUpdateInterval = this.disableTimerUpdateInterval.bind(
      this
    );

    // Selected episode
    this.episode = this.props.data.allFeedAnchorFm.nodes.find(
      node => node.guid === this.props.guid
    );

    this.timerUpdateInterval = null;
  }

  componentDidMount() {
    this.initHowler();
  }

  initHowler() {
    this.destroyHowler();

    if (typeof Howl !== 'undefined') {
      // Check if window is available
      this.howler = new Howl({
        src: this.episode.enclosure.url,
        onload: () => {
          this.setState({
            duration: this.howler.duration()
          });
        }
      });
    }
  }

  destroyHowler() {
    if (this.howler) {
      this.howler.off();
      this.howler.stop();
      this.howler.unload();
      this.howler = null;
    }
  }

  play() {
    const playing = this.howler.playing();

    if (!playing) {
      this.howler.play();
      this.setState({
        started: true,
        paused: false
      });
      this.enableTimerUpdateInterval();
    }
  }

  pause() {
    this.howler.pause();
    this.setState({
      paused: true
    });
    this.disableTimerUpdateInterval();
  }

  rewind() {
    this.howler.seek(0);
    this.updateTimer();
  }

  getDuration() {
    return this.howler.duration();
  }

  updateTimer() {
    this.setState({
      timer: this.howler.seek()
    });
  }

  enableTimerUpdateInterval() {
    this.timerUpdateInterval = setInterval(this.updateTimer, 250);
  }

  disableTimerUpdateInterval() {
    clearTimeout(this.timerUpdateInterval);
  }

  mainButtonAction() {
    if (!this.state.started || this.state.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  backButtonAction() {
    this.rewind();
  }

  render() {
    return (
      <Player
        started={this.state.started}
        paused={this.state.paused}
        mainButtonAction={this.mainButtonAction}
        backButtonAction={this.backButtonAction}
        timer={this.state.timer}
        duration={this.state.duration}
      />
    );
  }
}

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
    render={data => <PlayerContainer data={data} {...props} />}
  />
);

export default PlayerContainerQuery;
