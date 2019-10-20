'use strict';

const {PLATFORM: platform} = process.env;

if (!platform) {
  console.error(`PLATFORM env is required`);
  process.exit(1);
}

module.exports {
  mode: 'development',
  devtool: false,
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist/${platform}`,
    filename: `[name].bundle.js`,
  },
  resolve: {
    extensions: transformExtension(platform, ['.js', '.jsx', '.css']),
  },
};

function transformExtension(platform, extensions) {
  return [
    ...extensions.map(ext => `.${platform}${ext}`),
    ...extensions,
  ];
}
