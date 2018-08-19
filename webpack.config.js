module.exports = (env) => {
  return {
    mode: env.mode,
    output: {
      filename: "index.js",
    },
  };
};