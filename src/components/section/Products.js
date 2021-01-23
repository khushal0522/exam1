import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

 

export class Products extends Component {
     constructor(props){
     super(props);      
    this.state = {
        search:''
    }
};
    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        const {search}=this.state;
 
         
        return (
                <div> 
                 <div className="ser"> 
                <input className='search'  type='text' placeholder='Search Book' onChange= {(e) => this.setState({ search: e.target.value }) }/> 
                </div>
            <div id="product">
               {
                    products.map(product =>(
                       <div className="card" key={product.bookID}>
                            
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product.bookID}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={()=> addCart(product.bookID)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
            </div>
        )
    }
}

export default Products
