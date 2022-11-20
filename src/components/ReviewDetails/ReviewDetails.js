import React from 'react';
import '../ReviewDetails/ReviewDetails.css'

const ReviewDetails = (props) => {
  
    return (
      <div>
            {
             props.cart.map(item => <div className='product'>
                <div className="product-info">
                    <h4>{item.name}</h4>
                    <p><small>by : {item.seller} </small></p>
                    <p>${item.price}</p>
                    <p><small>{item.quantity} </small></p>
                    <button onClick={()=>props.removeFromCartHandler(item.id)}>Remove</button>
                    </div>
             </div>)
           }
        </div>
    );
};

export default ReviewDetails;