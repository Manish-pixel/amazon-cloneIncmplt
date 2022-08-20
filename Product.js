import React from 'react'
import './Product.css';
import ear1 from './clone-elements/mi_earphones.jpg';
import { useStateValue } from './specialComponents/MyContext';

// import './Product.css';
function Product({id, title,  image, price, rating }) {
  const [{basket} , dispatch] = useStateValue();
  console.log("this is the basket >>>", basket)
  const addToBasket = () => {
    dispatch ({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className = "product_info">
        <p> {title}  </p>
      
        <p className='product_price'>
             <small>Rs</small>
             <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map((_, i) =>(
            <p>🌟</p>)
          )}
        </div>
      </div>
      <img src={image} className="product_1"/>
      <button className='product_button' onClick={addToBasket}>Add to Cart</button>
    </div>

    
    // </div>
  )
}

export default Product