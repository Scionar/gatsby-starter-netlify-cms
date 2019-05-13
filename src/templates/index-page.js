import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout } from "../components";
import {
  HeaderContainer,
  FooterContainer,
  EpisodeFeedContainer
} from "../containers";

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HeaderContainer />
      <EpisodeFeedContainer />
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
