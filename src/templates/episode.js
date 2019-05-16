import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout } from "../components";
import { HeaderContainer, FooterContainer } from "../containers";

const IndexPage = ({ data }) => {
  const node = data.feedAnchorFm;

  return (
    <Layout>
      <HeaderContainer />
      <h1>{node.title}</h1>
      <FooterContainer />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query EpisodeTemplate($id: String!) {
    feedAnchorFm(guid: { eq: $id }) {
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
