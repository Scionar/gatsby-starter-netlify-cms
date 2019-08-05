import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

import { episodePath, stripHtml, truncate } from '../utils';
import { EpisodeCard, SeasonDropdown } from '../components';
import examplePodcastCover from '../img/example-podcast-cover.jpg';

const EpisodeFeedContainer = ({ data }) => {
  const episodes = data.allFeedAnchorFm.nodes;
  const seasonArray = [];

  episodes.map((node, index) => {
    const season = node.itunes.season;
    const episode = node.itunes.episode;
    let seasonIndexInArray;

    if (!Array.isArray(seasonArray[season])) {
      seasonArray[season] = [];
    }

    if (seasonArray[season][episode]) {
      console.log(
        'Two episodes with same season and episode. Check Podcast feed to fix the problem.'
      );
    }

    seasonArray[season][episode] = node;
  });

  return seasonArray.map((season, seasonIndex) => {
    const dropdownOpen = seasonIndex === seasonArray.length - 1;
    return (
      <SeasonDropdown
        key={seasonIndex}
        header={`Season ${seasonIndex}`}
        style={{ marginTop: '2rem' }}
        open={dropdownOpen}
      >
        {season.map((node, episodeIndex) => {
          // Set modifier class if index is uneven.
          const modifier =
            episodeIndex % 2 === 0 ? undefined : 'episode-card--poked-right';
          const image = _.get(
            node,
            'localImage.childImageSharp.fluid.src',
            undefined
          );

          return (
            <EpisodeCard
              key={node.guid}
              modifier={modifier}
              style={{ marginTop: '2rem' }}
              runningNumber={node.itunes.episode}
              coverImage={image}
              title={node.title}
              description={truncate(stripHtml(node.content), 150)}
              link={episodePath(node.title)}
              season={'' + seasonIndex}
              episodeUrl={node.enclosure.url}
            />
          );
        })}
      </SeasonDropdown>
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
            enclosure {
              url
            }
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
            localImage {
              childImageSharp {
                fluid(
                  maxWidth: 295
                  maxHeight: 295
                  quality: 70
                  cropFocus: CENTER
                ) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => <EpisodeFeedContainer data={data} {...props} />}
  />
);

export default EpisodeFeedContainerQuery;
