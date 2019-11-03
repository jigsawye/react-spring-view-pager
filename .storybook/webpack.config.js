module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: "ts-loader"
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
