import React from 'react';
import ReactDOM from 'react-dom/client';
import Tree from './App.js';
//first activity - class component
/*const root = ReactDOM.createRoot(document.getElementById('root'));

class Student extends React.Component{
  render(){
    return <h2>I am a Codingal Teacher</h2>;
  }
}
//ReactDOM.render(<Student />,document.getElementById('root'));
root.render(<Student/>);*/

//second activity - function component
/*const root = ReactDOM.createRoot(document.getElementById('root'));
function Student(){
  return <h2>I am Satya</h2>;
}
root.render(<Student/>);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Tree/>);





