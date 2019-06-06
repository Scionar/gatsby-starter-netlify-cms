import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { EpisodeAvailableOn, EpisodeAvailableOnItem } from '../components';

class EpisodeAvailableOnContainer extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const services = [
      {
        name: 'iTunes',
        link:
          'https://itunes.apple.com/us/podcast/nudging-pixels/id1449180059?mt=2&uo=4'
      },
      {
        name: 'Google Podcasts',
        link:
          'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84N2I4MzA4L3BvZGNhc3QvcnNz'
      },
      {
        name: 'Spotify',
        link: 'https://open.spotify.com/show/5EYgxEZOKaYeCN2tKsDHvO'
      },
      {
        name: 'Breaker',
        link: 'https://www.breaker.audio/nudging-pixels'
      },
      {
        name: 'Overcast',
        link: 'https://overcast.fm/itunes1449180059/nudging-pixels'
      },
      {
        name: 'Pocket Casts',
        link: 'https://pca.st/4ydd'
      },
      {
        name: 'PodBean',
        link:
          'https://www.podbean.com/podcast-detail/jxsuu-87146/Nudging-Pixels-Podcast'
      },
      {
        name: 'RadioPublic',
        link: 'https://radiopublic.com/nudging-pixels-6pw1yD'
      },
      {
        name: 'Stitcher',
        link: 'https://www.stitcher.com/podcast/anchor-podcasts/nudging-pixels'
      }
    ];

    return services.map((node, index) => (
      <EpisodeAvailableOnItem key={index} name={node.name} link={node.link} />
    ));
  }

  render() {
    return (
      <EpisodeAvailableOn style={{ marginTop: '3rem' }}>
        {this.renderItems()}
      </EpisodeAvailableOn>
    );
  }
}

export default EpisodeAvailableOnContainer;
