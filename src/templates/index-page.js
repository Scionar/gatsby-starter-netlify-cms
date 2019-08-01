import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';

import { Layout, LandingPageContent } from '../components';
import {
  HeaderContainer,
  FooterContainer,
  EpisodeFeedContainer,
  LanderMetaDataContainer,
  PlayerContainer
} from '../containers';

const IndexPage = ({ data }) => {
  const title = _.get(data, 'markdownRemark.frontmatter.title', undefined);
  const description = _.get(
    data,
    'markdownRemark.frontmatter.description',
    undefined
  );

  return (
    <>
      <LanderMetaDataContainer title={title} description={description} />
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
      <PlayerContainer />
    </>
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
