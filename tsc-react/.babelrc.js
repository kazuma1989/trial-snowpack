module.exports = {
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    [
      "snowpack/assets/babel-plugin.js",
      {
        importMap: `${__dirname}/public/web_modules/import-map.json`,
        optionalExtensions: true
      }
    ]
  ]
};
