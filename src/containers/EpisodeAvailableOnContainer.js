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
          'https://podcasts.apple.com/fi/podcast/nudging-pixels/id1449180059'
      },
      {
        name: 'iTunes',
        link:
          'https://podcasts.apple.com/fi/podcast/nudging-pixels/id1449180059'
      }
    ];

    return services.map((node, index) => (
      <EpisodeAvailableOnItem key={index} name={node.name} link={node.link} />
    ));
  }

  render() {
    return <EpisodeAvailableOn>{this.renderItems()}</EpisodeAvailableOn>;
  }
}

export default EpisodeAvailableOnContainer;
