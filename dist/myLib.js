"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.render = render;
require("core-js/modules/web.dom-collections.iterator.js");
function createElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  return {
    type,
    props: props || {},
    children
  };
}
function render(component, elementId) {
  const root = document.getElementById(elementId);
  root.innerHTML = ''; // Clear existing content

  function buildElement(obj) {
    // Create the element
    const element = document.createElement(obj.type);

    // Set properties and attributes
    Object.entries(obj.props || {}).forEach(_ref => {
      let [key, value] = _ref;
      if (key in element) {
        element[key] = value;
      } else {
        element.setAttribute(key, value);
      }
    });

    // Append children
    obj.children.forEach(child => {
      if (typeof child === 'object') {
        element.appendChild(buildElement(child));
      } else {
        element.appendChild(document.createTextNode(child));
      }
    });
    return element;
  }
  const renderedElement = buildElement(component);
  root.appendChild(renderedElement);
}