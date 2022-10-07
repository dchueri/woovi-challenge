// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('@movies-catalog/babel');

const customConfig = {
  ...config,
  presets: [
    ...config.presets,
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [['relay', { schema: '../server/graphql/schema.graphql' }]],
};

module.exports = customConfig;
