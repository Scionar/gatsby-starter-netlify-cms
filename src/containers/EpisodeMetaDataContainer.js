import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

import NpLogo from '../img/np-logo.png';
import { MetaData } from '../components';
import { stripHtml, truncate } from '../utils';

class EpisodeMetaDataContainer extends Component {
  render() {
    // Pick the right item from feed. This is not done in GraphQL query, because
    // components can't have dynamic querys.
    const metaData =
      this.props.data.allFeedAnchorFm.nodes.find(
        node => node.guid === this.props.guid
      ) || {};

    const description = truncate(stripHtml(metaData.content), 150);

    return (
      <MetaData
        title={metaData.title}
        description={description}
        siteName={'Nudging Pixels'}
        canonical={process.env.GATSBY_CANONICAL_URL}
        siteUrl={process.env.GATSBY_WEBSITE_URL}
        twitterUrl={'https://twitter.com/nudgingpixels'}
        twitterAccount={'@NudgingPixels'}
        shareImage={_.get(
          metaData,
          'localImage.childImageSharp.fixed.src',
          undefined
        )}
        shareImageHeight={240}
        shareImageWidth={240}
        publisherLogo={NpLogo}
        publisherLogoHeight={264}
        publisherLogoWidth={436}
      />
    );
  }
}

const EpisodeMetaDataContainerQuery = props => (
  <StaticQuery
    query={graphql`
      query EpisodeMetaDataContainerQuery {
        allFeedAnchorFm(sort: { order: ASC, fields: [isoDate] }) {
          nodes {
            guid
            title
            content
            localImage {
              childImageSharp {
                fixed(width: 240, height: 240, quality: 70, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => <EpisodeMetaDataContainer data={data} {...props} />}
  />
);

export default EpisodeMetaDataContainerQuery;
