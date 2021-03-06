const _ = require('lodash');
const path = require('path');
const slugify = require('slugify');
const {
  createFilePath,
  createRemoteFileNode
} = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      allFeedAnchorFm {
        edges {
          node {
            guid
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    const episodes = result.data.allFeedAnchorFm.edges;

    episodes.forEach(edge => {
      const guid = edge.node.guid;
      const title = edge.node.title;
      createPage({
        path: `/episode/${slugify(title, { remove: /[?*+~.()'"!:@]/g })}`,
        component: path.resolve(`src/templates/episode.js`),
        // additional data can be passed via context
        context: {
          guid
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = async ({
  node,
  actions,
  store,
  getNode,
  createNodeId,
  cache
}) => {
  const { createNode, createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images
  const nodeType = node.internal.type;

  if (nodeType === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
  if (nodeType === 'FeedAnchorFM') {
    const url = _.get(node, 'itunes.image.attrs.href', null);
    if (url) {
      const fileNode = await createRemoteFileNode({
        url: node.itunes.image.attrs.href,
        store,
        cache,
        createNode,
        parentNodeId: node.id,
        createNodeId
      });

      if (fileNode) {
        // Link File node to FeedAnchorFM node at field image.
        node.localImage___NODE = fileNode.id;
      }
    }
  }
};
