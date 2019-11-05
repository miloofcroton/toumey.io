/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const fs = require('fs');
const withPlugins = require('next-compose-plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});
const mdxConfig = {
  pageExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'md',
    'mdx'
  ]
};

module.exports = withPlugins(
  [
    [withMDX, mdxConfig],
    // [withSass, sassConfig],
  ],
  {
    // target: 'server' is necessary to export static files
    target: 'server',
    env: {
      // this is how you get values from the '.env' files
      PORT: process.env.PORT,
      ROOT: __dirname,
    },
    exportTrailingSlash: true,

    exportPathMap: async (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) => {

      const pathMap = {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/play': { page: '/play' },
        // '/work': { page: '/work' },
        // '/thoughts': { page: '/thoughts' },
      };

      const playFiles = await fs.readdirSync(`${__dirname}/src/content/play/posts`);

      playFiles.map((post) => {
        const id = post.slice(0, -3);
        pathMap[`/play/${id}`] = { page: '/play/[id]', query: { id: id } };
      });

      return pathMap;
    },

    webpack: (config, { defaultLoaders, isServer, dev } ) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
        module: 'empty'
      };

      config.module.rules.push(
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack'
            }
          ]
        }
      );

      if (isServer && !dev) {
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = { ...(await originalEntry()) };
          // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
          entries['./src/services/blog/data/rssFeed.js'] = './src/services/blog/data/rssFeed.js';
          return entries;
        };
      }

      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      return config;
    },
  }
);
