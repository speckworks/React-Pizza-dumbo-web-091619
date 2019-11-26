import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {

    const allDePizzas = this.props.pizzas
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
           allDePizzas.map((pizza) =>
           {
             return < Pizza pizza={pizza} />
           })
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
