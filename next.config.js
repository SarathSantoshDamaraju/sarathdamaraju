const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withCSS(withMDX());
module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
};
