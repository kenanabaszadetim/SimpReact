"use strict";
import { jsxFn } from "./MyComponent.jsx";
import { createElement, render } from "./myLib.js";

// Assuming jsxFn is a function returning a component object
const myComponent = jsxFn();
console.log(myComponent);
render(myComponent, "app");
