import React, { Component } from 'react'
import "./KeyPad.css";

export default class KeyPad extends Component {
    constructor(props){
        super(props);
        this.onButtonClick  = this.onButtonClick.bind(this);
      }

onButtonClick(e){
   this.props.onClick(e.target.name);
  //  console.log(e.target.name);
}

  render() {
    return (
        <div className="button">
       <button name="(" onClick={this.onButtonClick}> ( </button>
        <button name="CE" onClick={this.onButtonClick}> CE </button>
        <button name=")" onClick={this.onButtonClick}> ) </button>
        <button name="C" onClick={this.onButtonClick}> C </button>
        <br/>
       <button name="1" onClick={this.onButtonClick}> 1 </button>
        <button name="2" onClick={this.onButtonClick}> 2 </button>
       <button name="3" onClick={this.onButtonClick}> 3 </button>
        <button name="+" onClick={this.onButtonClick}> + </button>
      <br/>
         <button name="4" onClick={this.onButtonClick}> 4 </button>
        <button name="5" onClick={this.onButtonClick}> 5 </button>
        <button name="6" onClick={this.onButtonClick}> 6 </button>
        <button name="-" onClick={this.onButtonClick}> - </button>
        <br/>
       <button name="7" onClick={this.onButtonClick}> 7 </button>
       <button name="8" onClick={this.onButtonClick}> 8 </button>
        <button name="9" onClick={this.onButtonClick}> 9 </button>
        <button name="*" onClick={this.onButtonClick}> * </button>
        <br/>
        <button name="." onClick={this.onButtonClick}> . </button>
       <button name="0" onClick={this.onButtonClick}> 0 </button>
        <button name="=" onClick={this.onButtonClick}> = </button>
        <button name="/" onClick={this.onButtonClick}> /</button>
      </div>
    )
  }
}
