const alias = require("@rollup/plugin-alias");

module.exports = {
  webDependencies: ["preact", "preact/compat", "preact/hooks"],

  rollup: {
    plugins: [
      alias({
        entries: [
          {
            find: "react",
            replacement: `${__dirname}/node_modules/preact/compat`
          }
        ]
      })
    ]
  }
};
