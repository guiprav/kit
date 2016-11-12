const { a, div } = require('kit/hh');

module.exports = v => div('.kitSiteHeader_title', [
  a('.kitSiteHeader_titleLink', {
    href: v.siteHeader_titleLink_href(v),
  }, [
    v.siteHeader_titleLink_contents(v),
  ]),
]);
