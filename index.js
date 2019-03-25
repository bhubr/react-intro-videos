// Uncomment these lines
// for use with Create React App
// import React from 'react';
// import ReactDOM from 'react-dom';

const MyParagraph = props => (
  <p>{props.text}</p>
);

const MyComponent = () => (
  <div>
    <h1>Hello</h1>
    <MyParagraph text="Some text" />
    <MyParagraph text="Another brilliant line" />
    <MyParagraph text="I'm really inspired" />
  </div>
);

const root = document.getElementById('root');

ReactDOM.render(
  <MyComponent />, root
);

