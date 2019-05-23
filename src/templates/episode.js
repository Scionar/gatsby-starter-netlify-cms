import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Layout,
  EpisodePageGrid,
  EpisodeDescription,
  EpisodeImage,
  EpisodeTitle,
  EpisodePlayer
} from '../components';
import {
  HeaderContainer,
  FooterContainer,
  EpisodeAvailableOnContainer
} from '../containers';

class EpisodePage extends Component {
  constructor(props) {
    super(props);
    this.firstCell = this.firstCell.bind(this);
    this.secondCell = this.secondCell.bind(this);
  }

  firstCell() {
    const node = this.props.data.feedAnchorFm;
    return (
      <>
        <EpisodeImage src={node.itunes.image.attrs.href} alt={node.title} />
        <EpisodeTitle style={{ marginTop: '2rem' }}>{node.title}</EpisodeTitle>
        <EpisodePlayer url={node.link} style={{ marginTop: '2rem' }} />
        <EpisodeAvailableOnContainer />
      </>
    );
  }

  secondCell() {
    const node = this.props.data.feedAnchorFm;
    return (
      <EpisodeDescription dangerouslySetInnerHTML={{ __html: node.content }} />
    );
  }

  render() {
    const node = this.props.data.feedAnchorFm;

    return (
      <Layout>
        <HeaderContainer />
        <EpisodePageGrid
          modifier="episode-page-grid--reverse"
          style={{ marginTop: '2rem' }}
          firstCell={this.firstCell()}
          secondCell={this.secondCell()}
        />
        <FooterContainer />
      </Layout>
    );
  }
}

EpisodePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default EpisodePage;

export const pageQuery = graphql`
  query EpisodeTemplate($guid: String!) {
    feedAnchorFm(guid: { eq: $guid }) {
      guid
      title
      content
      pubDate
      enclosure {
        url
        length
        type
      }
      link
      itunes {
        duration
        season
        episode
        image {
          attrs {
            href
          }
        }
      }
    }
  }
`;
