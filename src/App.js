import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    title: 'Mon catalogue de voitures'
  }

  changeTitle = (e) => {
    this.setState({
      title: "Mon nouveau titre"
    })
  }

  changeViaParam = (title) => {
    this.setState({
      title
    })
  }

  changeViaBind = (title) => {
    this.setState({
      title
    })
  }

  changeViaInput = (e) => {
    this.setState({
     title: e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <Mycars title={this.state.title}/>
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam('Changer le titre via param')}>Changer le nom en dynamique</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Titre via bind</button>
        <input type="text" onChange={this.changeViaInput} />
      </div>
    );
  }
}

export default App;
