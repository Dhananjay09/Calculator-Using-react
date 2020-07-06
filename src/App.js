import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"dhananjay"
    }
}
placevalue=(e,id)=>{
  document.getElementById('calculation').value += document.getElementById(id).textContent;
}

equal=(e)=>{
const exp = document.getElementById('calculation').value;
document.getElementById('calculation').value=eval(exp);
}

clear=(e)=>{
document.getElementById('calculation').value='';
}
render(){
  return (
    <div className="App">
      <div className="Calculator">
        <input className='calculation' id='calculation'></input>
        <div className='airthmatic-buttons'>
          <button className='plus' id='add' onClick={e=>{this.placevalue(e,'add')}}>+</button>
          <button className='plus' id='sub' onClick={e=>{this.placevalue(e,'sub')}}>-</button>
          <button className='plus' id='multiplication' onClick={e=>{this.placevalue(e,'multiplication')}}>*</button>
          <button className='plus' id='division' onClick={e=>{this.placevalue(e,'division')}}>/</button>
          </div>
          <div className='airthmatic-buttons1'>
          <button className='plus' id='mod' onClick={e=>{this.placevalue(e,'mod')}}>%</button>
          <button className='plus' id='1' onClick={e=>{this.placevalue(e,'1')}}>1</button>
          <button className='plus' id='2' onClick={e=>{this.placevalue(e,'2')}}>2</button>
          <button className='plus' id='3' onClick={e=>{this.placevalue(e,'3')}}>3</button>
          </div>
          <div className='airthmatic-buttons2'>
          <button className='plus' id='4' onClick={e=>{this.placevalue(e,'4')}}>4</button>
          <button className='plus' id='5' onClick={e=>{this.placevalue(e,'5')}}>5</button>
          <button className='plus' id='6' onClick={e=>{this.placevalue(e,'6')}}>6</button>
          <button className='plus' id='7' onClick={e=>{this.placevalue(e,'7')}}>7</button>
          </div>
          <div className='airthmatic-buttons3'>
          <button className='plus' id='8' onClick={e=>{this.placevalue(e,'8')}}>8</button>
          <button className='plus' id='9' onClick={e=>{this.placevalue(e,'9')}}>9</button>
          <button className='plus' id='0' onClick={e=>{this.placevalue(e,'0')}}>0</button>
          <button className='plus' id='equal' onClick={e=>{this.equal(e,'equal')}}>=</button>
          </div>
        <button className='clear' id='clear' onClick={e=>{this.clear(e,'clear')}}> clear </button> 
      </div>
     
    </div>
  );
};
  }
export default App;