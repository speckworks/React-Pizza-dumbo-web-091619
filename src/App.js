import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas:[]
  }

      onChange = (event) => {
      setState({
        [event.target.name]:event.target.value
      })
    }

  componentDidMount(){
  fetch("http://localhost:3000/pizzas")
  .then((res) => res.json())
  .then((pizzas)=>this.setState({pizzas: pizzas}))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzas= {this.state.pizzas}/>
        <PizzaList pizzas= {this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
