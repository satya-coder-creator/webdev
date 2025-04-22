import React from 'react';
import ReactDOM from 'react-dom/client';
class Props extends React.Component{
  constructor(Props) {
    super(Props);
    this.state={
      result:0
    };
    this.op1Ref=React.createRef();
    this.op2Ref=React.createRef();
    this.ResultRef=React.createRef();
  }

  render(){
    return (
      <form>
    <div className="container">
        <h1>Multiply</h1>
        <div className="form-group">
            <label>Enter operand 1</label>
            <input type="number" id="num1" ref={this.op1Ref} placeholder="enter operand 1"/> 
        </div>
        <div className="form-group">
            <label>Enter operand 2</label>
            <input type="number" id="num2" ref={this.op1Ref} placeholder="enter operand 2"/> 
        </div>
        <div>
            <p ref={this.resultRef}></p>
        </div>
        <div>
            <button type="button" className="btn" onClick="this.mysubmit()"> Multiply</button>
        </div>
    </div>
    </form>
    );
  }
  mysubmit = () => {
    const op1 = this.op1Ref.current.value;
    const op2 = this.op2Ref.current.value;
    this.resultRef.current.innerHTML = `Result: ${op1*op2}`;
  
  }
}

/*mysubmit = () => {
  const op1 = this.op1Ref.current.value;
  const op2 = this.op2Ref.current.value;
  this.resultRef.current.innerHTML = `Result: ${op1*op2}`;

}*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Props/>);