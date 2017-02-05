// MIT © 2017 azu
"use strict";
var remark = require('remark');
var toHAST = require('mdast-util-to-hast');
var to = require('..');
var hast = toHAST(remark().parse(`
## Hello **World**!

[l](http://example "test")

`));
console.log(to(hast));
