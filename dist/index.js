"use strict";

var _MyComponent = require("./MyComponent.jsx");
var _myLib = require("./myLib.js");
// Assuming jsxFn is a function returning a component object
const myComponent = (0, _MyComponent.jsxFn)();
console.log(myComponent);
(0, _myLib.render)(myComponent, "app");