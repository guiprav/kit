const { meta } = require('kit/hh');

module.exports = v => [
  meta({ charset: 'utf-8' }),

  v.headStylesheets(v),
  v.headScripts(v),
];
