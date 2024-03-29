import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import GroceryItems from './Components/GroceryItem';
import GroceryCart from './Components/GroceryCart';

export class App extends Component {
  
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     cart: []
  //   }
  //   this.addToCart = this.addToCart.bind(this);
  //   this.removeFromCart = this.removeFromCart.bind(this);
  // }

  // addToCart(item) {
  //   const cart = [...this.state.cart,item];
  //   this.setState({cart});
  // }

  // removeFromCart(index){
  //   const cart = [...this.state.cart]
  //   cart.splice(index,1)
  //   this.setState({cart})
  // }


  render() {
    return (
      <div id="app-container">
        <h1>Grocery Cart</h1>
        <div id="grocery-container">
          {/* <GroceryItems addToCart={this.addToCart}/>
          <GroceryCart items={this.state.cart} 
                       removeFromCart={this.removeFromCart}/> */}
          <GroceryItems />
          <GroceryCart />             
        </div>
      </div>
    )
  }
}

export default App


