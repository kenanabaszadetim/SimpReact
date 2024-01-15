export function createElement(type, props, ...children) {
    return { type, props: props || {}, children };
}

export function render(component, elementId) {
    const root = document.getElementById(elementId);
    root.innerHTML = ''; // Clear existing content

    function buildElement(obj) {
        // Create the element
        const element = document.createElement(obj.type);

        // Set properties and attributes
        Object.entries(obj.props || {}).forEach(([key, value]) => {
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
