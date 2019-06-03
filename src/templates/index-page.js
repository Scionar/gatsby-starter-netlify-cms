import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';

import { Layout, LandingPageContent } from '../components';
import {
  HeaderContainer,
  FooterContainer,
  EpisodeFeedContainer
} from '../containers';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HeaderContainer />
      <LandingPageContent
        style={{ marginTop: '3rem' }}
        title={_.get(data, 'markdownRemark.frontmatter.title', undefined)}
        description={_.get(
          data,
          'markdownRemark.frontmatter.description',
          undefined
        )}
      />
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
        description
      }
    }
  }
`;
