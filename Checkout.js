import React from 'react'
import './Checkout.css';
import checkbanner from './clone-elements/oppo.jpg';
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src={checkbanner}/>
            <div>
            <h2 className='checkout_title'>Your Shopping Basket</h2></div>

            {/* Basket items */}
            {/* Basket items */}
            {/* Basket items */}
            {/* Basket items */}
            {/* Basket items */}
        </div>



        <div className='checkout_right' >
          <Subtotal />

          {/* <h2>The subtotal</h2> */}
        </div>

    </div>
  )
}

export default Checkout
