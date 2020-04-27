module.exports =
  process.env.node_ENV === 'production' ? require('./prod') : require('./dev');
