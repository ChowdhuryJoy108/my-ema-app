import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteFromDb, getStoredCart } from "../../utilities/fakedb";
import fakeData from "../../fakeData/products.json";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import Cart from "../Cart/Cart";
import "../Review/Review.css";
const Review = () => {
  const [cart, setCart] = useState([]);

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
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Review;
