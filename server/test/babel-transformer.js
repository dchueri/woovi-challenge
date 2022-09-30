const { createTransformer } = require("babel-jest").default;

const config = require("../../babel");

module.exports = createTransformer({ ...config });
