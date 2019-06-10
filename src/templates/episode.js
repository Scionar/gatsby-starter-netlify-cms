import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';
import moment from 'moment';

import {
  Layout,
  EpisodePageGrid,
  EpisodeDescription,
  EpisodeImage,
  EpisodeTitle,
  EpisodeAndSeasonNumber
} from '../components';
import {
  HeaderContainer,
  FooterContainer,
  EpisodeAvailableOnContainer,
  EpisodeMetaDataContainer,
  PlayerContainer
} from '../containers';

class EpisodePage extends Component {
  constructor(props) {
    super(props);
    this.firstCell = this.firstCell.bind(this);
    this.secondCell = this.secondCell.bind(this);
  }

  firstCell() {
    const node = this.props.data.feedAnchorFm;
    const image = _.get(
      node,
      'localImage.childImageSharp.fluid.src',
      undefined
    );
    const season = _.get(node, 'itunes.season', undefined);
    const episode = _.get(node, 'itunes.episode', undefined);
    const date = moment(node.pubDate).format('Do MMMM YYYY');

    return (
      <>
        <EpisodeImage src={image} alt={node.title} />
        <EpisodeTitle style={{ marginTop: '2rem' }}>{node.title}</EpisodeTitle>
        <EpisodeAndSeasonNumber
          style={{ marginTop: '1rem' }}
          date={date}
          seasonNumber={season}
          EpisodeNumber={episode}
        />
        <PlayerContainer guid={node.guid} />
        <EpisodeDescription
          modifier="episode-description--hide-on-desktop"
          style={{ marginTop: '2rem' }}
          dangerouslySetInnerHTML={{ __html: node.content }}
        />
        <EpisodeAvailableOnContainer />
      </>
    );
  }

  secondCell() {
    const node = this.props.data.feedAnchorFm;
    return (
      <EpisodeDescription
        modifier="episode-description--hide-on-mobile"
        dangerouslySetInnerHTML={{ __html: node.content }}
      />
    );
  }

  render() {
    const node = this.props.data.feedAnchorFm;

    return (
      <>
        <EpisodeMetaDataContainer guid={node.guid} />
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
      </>
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
      localImage {
        childImageSharp {
          fluid(maxWidth: 240, maxHeight: 240, quality: 70, cropFocus: CENTER) {
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`;
