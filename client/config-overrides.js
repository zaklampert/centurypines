const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = injectBabelPlugin('styled-jsx/babel', config)
    return config;
  }