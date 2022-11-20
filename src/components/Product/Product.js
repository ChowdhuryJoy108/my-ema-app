import React from 'react';
import './Product.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props)
    const {img,name,seller,price,stock,id} = props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4><Link to={"/product/"+id}>{name}</Link></h4>
                <p><small>by : {seller} </small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon </small></p>
                {   
                props.showAddToCartButton &&
                <button className='btn' onClick={() => props.addCartHandler(props.product)} ><FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;