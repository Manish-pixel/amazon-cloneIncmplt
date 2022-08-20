import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './specialComponents/MyContext';
import { getBasketTotal } from './specialComponents/reducer';
function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch]= useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>  
                  SubTotal ({basket.length} items):
                <strong>{value}</strong>
              </p>
              <small className='subtotal_gift'>
                <input type="checkbox" /> 
                This order contains a gift 
              </small>
            
            </>
          )
          } 
          decimalScale = {2}
          // value = {getBasketTotal(basket)}//part of the homework 
          value = {0}
          displayType = {"text"}
          thousandSeparator = {true}
          prefix = {"$"}

        />
        <button onClick={e =>history.push('/payment')}> Proceed to checkout </button>

          
      
    </div>
  );
}

export default Subtotal;
