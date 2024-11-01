var React = require("react");

function createElement(content, tag='div', props={}) {
  // create a react element here
   return React.createElement(
     tag,

     props ,
     
     props,
    'Hello World'
  );
}

function createUnorderedList(list) { 
  // create a react unordered list with children list items created form the list argument

   const Items = list.map(item => React.createElement(
     'li',
     { key: item },
     item = "Hello World"
=======
   const group = list.map(i => React.createElement(
     'li',
     { key: i },
     i = "Hello World"
   )
  );
  return React.createElement(
    'ul', 
    null, 

    ...Items);
}


console.log('Anne')
=======
    ...group);
}

