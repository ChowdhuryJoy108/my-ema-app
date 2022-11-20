import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.json';
import { useState } from 'react';
import Product from '../Product/Product';
import { library } from '@fortawesome/fontawesome-svg-core';
import Cart from '../Cart/Cart.js'
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([])

    const addCartHandler = (product) =>{
        const sameProduct = cart.find(pd =>pd.id === product.id);

        let count = 1;
        let newCart;
        if(sameProduct){
           count = sameProduct.quantity + 1;
           sameProduct.quantity = count;
            const others = cart.filter(pd =>pd.id ===product.id);
            newCart = [...others, sameProduct]

        }
        else{
            product.quantity =1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDb(product.id)
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        products.map(product => <Product 
                        key={product.id}
                        showAddToCartButton={true} 
                        product={product} 
                        addCartHandler = {addCartHandler}
                        />)
                    }

            </div>

            <div className="cart-container">
                <Cart cart={cart}/>      
            </div>
        </div>
    );
};

export default Shop;