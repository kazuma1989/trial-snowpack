const alias = require('@rollup/plugin-alias')

module.exports = {
  webDependencies: ['preact/compat', 'preact/hooks'],

  rollup: {
    plugins: [
      alias({
        entries: {
          react: 'preact/compat',
        },
      }),
    ],
  },
}
