export const Fragment = Symbol("fragment");

export function createElement(type, props, ...children) {
  const attributes = { ...props };

  if (attributes.children != null) {
    if (children.length == 0) {
      children = attributes.children;
    }

    delete attributes.children;
  }

  if (typeof type == "function") {
    return type({ ...attributes, children });
  } else if (typeof type == "symbol") {
    if (type == Fragment) {
      const fragment = document.createDocumentFragment();
      appendChildren(fragment, children);
      return fragment;
    }
  } else if (typeof type == "string") {
    const element = document.createElement(type);
    setAttributes(element, attributes);
    appendChildren(element, children);
    return element;
  }
}

function setAttributes(element, attributes) {
  for (let [name, value] of Object.entries(attributes)) {
    if (value != null) {
      if (name == "className") {
        name = "class";
      }

      element.setAttribute(name, value);
    }
  }
}

function appendChildren(element, children) {
  for (const child of children) {
    if (child != null) {
      if (child instanceof Array) {
        appendChildren(element, child);
      } else {
        element.append(child);
      }
    }
  }
}