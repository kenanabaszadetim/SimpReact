import { createElement } from "./myLib.js";

export const jsxFn = () => {
    return createElement("div", null,
        createElement("h1", null, "JSX"),
        createElement("p", null, "JSX is a syntax extension to JavaScript...")
    );
};
