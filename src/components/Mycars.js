import React, { Component } from "react";
import Car from './Cars';

class Mycars extends Component{

  state = {
    voitures: [
      {name: "Ford", color: "red", annee: 2000},
      {name: "Mercedes", color: "black", annee: 2010},
      {name: "Peugeot", color: "green", annee: 2018},
    ],
    title: 'Mon Catalogue Voitures 2'
  }

  addTenYears = () => {

    const updatedState = this.state.voitures.map((param) => {
      return param.annee -= 10;
    });

    this.setState({
      updatedState
    })
  }

  render(){

    const year = new Date().getFullYear();

    return (
      <div>
        <h1>{this.state.title}</h1>

        <button onClick={this.addTenYears}>+ 10 ans</button>

        {
          this.state.voitures.map((voiture, index) => {
            return (
              <div key={index}>
                <Car name = {voiture.name }color ={voiture.color} year={year - voiture.annee + ' ans'} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Mycars;
