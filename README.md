# @k0michi/hyperscript-jsx

A library to create DOM element with JSX.

## Example

```jsx
const element = (
  <div id="page">
    <div id="header">
      <h1 className="classy" style="background-color: rgb(34, 34, 255);">h</h1>
    </div>
    <div id="menu" style="background-color: rgb(34, 255, 34);">
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
    <h2 style="background-color: rgb(255, 34, 34);">content title</h2>
    <p>so it's just like a templating engine,
      but easy to use inline with javascript
    </p>
    <p>the intension is for this to be used to create
      reusable, interactive html widgets. </p>
  </div>
);
```

## Installation

```
yarn add @k0michi/hyperscript-jsx
```

## License

MIT License