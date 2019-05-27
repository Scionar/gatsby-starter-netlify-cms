import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

import NpLogo from '../img/np-logo.png';
import { MetaData } from '../components';
import { stripHtml, truncate } from '../utils';

class EpisodeMetaDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const metaData =
      this.props.data.allFeedAnchorFm.nodes.find(
        node => (node.guid = this.props.guid)
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
        shareImage={_.get(metaData, 'itunes.image.attrs.href', undefined)}
        shareImageHeight={undefined} // todo: Can be defined after images are locally optimized.
        shareImageWidth={undefined} // todo: Can be defined after images are locally optimized.
        publisherLogo={NpLogo}
        publisherLogoHeight={undefined} // todo: Can be defined after images are locally optimized.
        publisherLogoWidth={undefined} // todo: Can be defined after images are locally optimized.
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
            link
            itunes {
              summary
              image {
                attrs {
                  href
                }
              }
              season
              episode
            }
          }
        }
      }
    `}
    render={data => <EpisodeMetaDataContainer data={data} {...props} />}
  />
);

export default EpisodeMetaDataContainerQuery;
