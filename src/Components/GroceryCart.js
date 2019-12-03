import React, { Component } from 'react'
import '../App.css';
import {connect} from 'react-redux';
class GroceryCart extends Component {


    render() {
        // if(this.props.items.length == 0){
        //     return <div id="grocery-cart">
        //         <p>Cart is Empty</p>
        //     </div>
        // }
        return <div id="grocery-cart">
            <table border="1">
                <tr>
                    <th></th>
                    <th>Item Price</th>
                    <th>Item Name</th>
                </tr>
                <tbody>
                    {this.props.items.map((item, index) => {
                        return <tr key={index}>
                            <td>
                                <button onClick={() => this.props.removeFromCart(index)}>Remove From Cart</button>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
            <p>
                Total: { this.props.items.reduce((accu,curr)=>{ return accu += curr.price },0) }
            </p>
        </div>
    }
}

function mapStateToProps(state){
    return {
        items: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        removeFromCart: (index) => {
            dispatch({
                type:'REMOVE_FROM_CART',
                index
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceryCart)
