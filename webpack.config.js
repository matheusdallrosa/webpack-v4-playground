module.exports = (env) => require(`./config/webpack.${env.mode}`)(env);