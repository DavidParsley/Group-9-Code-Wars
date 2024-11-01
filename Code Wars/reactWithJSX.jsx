
let React = require('react');

// let us know who your three favorite codewarriors are!
// maintain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>;


var CodewarsLink = React.createClass({
  render: function() {
    return (
      <a href={`http://www.codewars.com/users/${this.props.user}`}>{this.props.user}</a>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.leaders.map(function(leader) {
          return <CodewarsLink user={leader} key={leader} />;
        })}
      </div>
    );
  }
});

console.log('David');
console.log('Hamza');
console.log('Anne');
console.log('Blessed');
console.log('Victor');