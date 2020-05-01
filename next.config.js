const fs = require('fs');

const blogPostsFolder = './src/content/journals';

const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});


const getPathsForPosts = () => fs
  .readdirSync(blogPostsFolder)
  .map((blogName) => {
    const trimmedName = blogName.substring(0, blogName.length - 3);
    return {
      [`/journals/${trimmedName}`]: {
        page: '/journals/[slug]',
        query: {
          slug: trimmedName,
        },
      },
    };
  })
  .reduce((acc, curr) => ({ ...acc, ...curr }), {});

module.exports = withCSS(withMDX());
module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };
  },
};
