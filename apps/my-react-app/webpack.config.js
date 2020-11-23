const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const webpackTailwindConfig = require('../../webpack-tailwind.config');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        webpackTailwindConfig.tailwindWebpackRule,
      ],
    },
  };
};