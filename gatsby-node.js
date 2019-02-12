exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-module-resolver',
    options: {
      root: ['./src'],
    },
  });
  actions.setBabelPreset({
    name: '@babel/preset-flow',
  });
};

