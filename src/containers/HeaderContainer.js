import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

import { Header, Logo } from '../components';

const HeaderContainer = ({ data }) => {
  const imagePath = _.get(data, 'file.childImageSharp.fluid.src', undefined);

  return <Header>{imagePath && <Logo image={imagePath} />}</Header>;
};

const HeaderContainerQuery = props => (
  <StaticQuery
    query={graphql`
      query HeaderContainerQuery {
        file(name: { eq: "np-logo" }) {
          id
          name
          childImageSharp {
            fluid(maxHeight: 112, cropFocus: CENTER) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    `}
    render={data => <HeaderContainer data={data} {...props} />}
  />
);

export default HeaderContainerQuery;
