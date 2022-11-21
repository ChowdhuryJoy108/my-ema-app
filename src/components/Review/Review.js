import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteFromDb, getStoredCart, clearTheCart } from "../../utilities/fakedb";
import fakeData from "../../fakeData/products.json";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import Cart from "../Cart/Cart";
import "../Review/Review.css";
import happyImg from "../../images/giphy.gif"

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () =>{
    setCart([]);
    setOrderPlaced(true);
    clearTheCart();
  }
  let thankYou;
  if(orderPlaced){
    thankYou = <img src={happyImg} alt="" />
  }
  const removeFromCartHandler = (productId) => {
    const newCart = cart.filter((pd) => pd.id !== productId);
    setCart(newCart);
    deleteFromDb(productId);
  };

  useEffect(() => {
    const savedCart = getStoredCart();
    const productIds = Object.keys(savedCart); //keys of every saved products
    const cartProducts = productIds.map((id) => {
      const product = fakeData.find((pd) => pd.id === id);
      product.quantity = savedCart[id];
      return product;
    });
    setCart(cartProducts);
  }, []);

  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((item) => (
          <div>
            <ReviewDetails
              removeFromCartHandler={removeFromCartHandler}
              cart={cart}
            />
          </div>
        ))}

        {
          thankYou
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};
export default Review;
