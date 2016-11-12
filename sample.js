const { html } = require('kit/hh');

const v = require('kit/views');

const page = html([
  v.head(v),
  v.siteHeader(v),
]);

console.log('<!doctype html>');
console.log(page.outerHTML);
