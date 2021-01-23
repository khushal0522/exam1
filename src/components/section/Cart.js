import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
 import '../css/Details.css'
import '../css/Cart.css'
import Context from '../Context'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.bookID}>
                                 <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${(item.price * item.count)}</span>
                                    </div>
                                     <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.bookID)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.bookID)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.bookID)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
