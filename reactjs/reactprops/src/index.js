import React from 'react';
import ReactDOM from 'react-dom/client';
//first activity - 
class Customer extends React.Component{
  render(){
    return <h2>I am from {this.props.city}</h2>;
  }
}

class Details extends React.Component{
  render(){
    return (
      <div>
        <h1>hello</h1>
        <Customer city="Chennai" />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);

//second activity
/*class Customer extends React.Component{
  render(){
    return <h2>I am from {this.props.city}</h2>;
  }
}
class Details extends React.Component{
  render(){
    const cityname="Mumbai";
    return (
      <div>
        <h1>hello</h1>
        <Customer city={cityname} />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Details />);*/