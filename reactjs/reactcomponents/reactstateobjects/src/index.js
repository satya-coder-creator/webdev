import React from 'react';
import ReactDOM from 'react-dom/client';

class Student extends React.Component{
  constructor(props){
    super(props)
      this.state={
        name:"reena",
        grade:5

      };
    
  }
  render(){
    return(
      <div>
        <h1>student</h1>
        <p>my name is {this.state.name}</p>
        <p>i am in grade {this.state.grade}</p>
      </div>
    ) ;
  }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Student/>);