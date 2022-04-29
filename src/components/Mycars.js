import React, { Component } from "react";
import Car from './Cars';

class Mycars extends Component{

  noCopy = () => {
    alert("merci de ne pas copier le texte");
  }



  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Car color='red'>Ford</Car>
        <Car color='black'>Mercedes</Car>
        <Car></Car>
      </div>
    );
  }
}

export default Mycars;
