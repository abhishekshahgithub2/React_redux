import React, { Component } from 'react'
import '../App.css';
import {connect} from 'react-redux';


class GroceryItem extends Component {


    render() {
        return <div id="grocery-items">
            <table border="1">
                <tr>
                    <th></th>
                    <th>Item Price</th>
                    <th>Item Name</th>
                </tr>
                <tbody>
                    {this.props.items.map((item, index) => {
                        return <tr id={index}>
                            <td>
                                <button onClick={()=>this.props.addToCart(item)}>Add TO Cart</button>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    }
}

function mapStateToProps(state){
    return {
        items: state.forSale
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch({
                type:'ADD_TO_CART',
                item
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceryItem)


