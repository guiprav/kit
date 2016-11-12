const { h1 } = require('kit/hh');

module.exports = v => h1('.kitSiteHeader_titleLink_heading', [
  v.siteTitle(v),
]);
