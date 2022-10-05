const { createTransformer } = require("babel-jest").default;

const config = require("@movies-catalog/babel");

module.exports = createTransformer({ ...config });
