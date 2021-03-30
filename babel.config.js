module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@containers': './src/containers',
            '@hooks': './src/hooks',
            '@providers': './src/providers',
            '@routes': './src/routes',
            '@pages': './src/pages',
            '@assets': './assets',
            '@data': './src/data',
          },
        },
      ],
    ],
  };
};
