import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { HeaderContainer, FooterContainer } from '../containers';

const EpisodePage = ({ data }) => {
  const node = data.feedAnchorFm;

  return (
    <Layout>
      <HeaderContainer />
      <h1>{node.title}</h1>
      <FooterContainer />
    </Layout>
  );
};

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
      }
    }
  }
`;
