import React from 'react';
import './Header.css';
import mslogo1 from './clone-elements/RoseLogo.png';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './specialComponents/MyContext';

function Header() {
  const [{basket},dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to={"/"}>
      <img className='header_logo' src={mslogo1}/>
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className = "header_SearchIcon" />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
            <span
             className='header_lineOne'>hello Guest 
             </span>
            <span
             className = 'header_lineTwo'>Sign In
             </span>
        </div>
        <div className ='header_option'> 
            <span className='header_lineOne'>Return and</span>
            <span className = 'header_lineTwo'>Orders</span>
        </div>
        <div className='header_option'>
            <span className='header_lineOne'> 
                Your 
            </span>
            <span className = 'header_lineTwo'> Prime</span>
        </div>
      
        <Link to={"/checkout"}>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_lineTwo header_basketCount'>{basket?.length}
          </span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
// with npm
