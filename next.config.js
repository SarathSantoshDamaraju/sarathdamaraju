/**
 * To get the YAML Front Matter like title, heading.. from the [pageName].md
 * TODO: can this be replaced with grey-matter
 */
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
    };
  },
};
