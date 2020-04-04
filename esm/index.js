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
  for (const [name, value] of Object.entries(attributes)) {
    if (value != null) {
      if (name == "style") {
        setStyleProperties(element, value);
      } else if (name == "form") {
        element.setAttribute("form", value);
      } else {
        element[name] = value;
      }
    }
  }
}

function setStyleProperties(element, properties) {
  const style = element.style;

  if (typeof properties == "string") {
    style.cssText = properties;
  } else {
    for (const [name, value] of Object.entries(properties)) {
      style[name] = value;
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