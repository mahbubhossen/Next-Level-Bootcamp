// common js to esm

// const { a } = require("./file2");

// const { a: x } = require("./file3");

// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");

// console.log(a, x);

// const { add, subs } = require("./utils");

// console.log(add(x, a));
// console.log(subs(x, a));

import { a } from "./file2.js";
import {a as x} from "./file3.js"


import utils from "./utils_esm/index.mjs"
console.log(utils.add(x, a));
console.log(utils.biyog(x, a));


console.log(a,x)