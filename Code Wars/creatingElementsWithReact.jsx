var React = require("react");

function createElement(content, tag="div", props={}) {
  // create a react element here
 return React.createElement(
     tag,
     props ,
    'Hello World'
  );
}

function createUnorderedList(list) {
  const listItems = list.map(item => React.createElement('li', { key: item }, item = "Hello World"));
  return React.createElement('ul', null, ...listItems);
}

// console.log (Hamza)