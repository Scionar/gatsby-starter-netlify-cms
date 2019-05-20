import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { episodePath, stripHtml, truncate } from '../utils';
import { EpisodeCard } from '../components';
import examplePodcastCover from '../img/example-podcast-cover.jpg';

const EpisodeFeedContainer = ({ data }) => {
  const episodes = data.allFeedAnchorFm.nodes;
  return episodes.map((node, index) => {
    // Set modifier class if index is uneven.
    const modifier = index % 2 === 0 ? undefined : 'episode-card--poked-right';

    return (
      <EpisodeCard
        key={node.guid}
        modifier={modifier}
        style={{ marginTop: '4rem' }}
        runningNumber={node.itunes.episode}
        coverImage={node.itunes.image.attrs.href}
        title={node.title}
        description={truncate(stripHtml(node.content), 150)}
        link={episodePath(node.title)}
      />
    );
  });
};

const EpisodeFeedContainerQuery = props => (
  <StaticQuery
    query={graphql`
      query EpisodeFeedContainerQuery {
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
    render={data => <EpisodeFeedContainer data={data} {...props} />}
  />
);

export default EpisodeFeedContainerQuery;
