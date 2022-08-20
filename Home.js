import React from 'react';
import "./Home.css";
import mi from './clone-elements/mi_1.jpg';
import realmebuds from './clone-elements/realme_buds.jpg';
import ear1 from './clone-elements/mi_earphones.jpg';
import iphone13 from './clone-elements/iphone13.jpg';
import iphone13pro from './clone-elements/iphone1pro.jpg';
import galaxyz from './clone-elements/galaxyz.jpg';
import macbook from './clone-elements/macbookpro.jpg';
import mac from './clone-elements/mac.jpg';
import Product from './Product';


function Home() {
  return (
    <div className='home'> 
      {/* <p>hiii</p> */}
      <div className='home_contaniner'>
        <img className='home_image'
          src={mi}

        />
        <div className='home_row'>
        <Product title={"Realme Buds Q2 Bluetooth Truly Wireless in Ear Earbuds with Mic Active Black " }
         image = {realmebuds}
         price={1500} 
         rating={3} />
        {/* product */}
        {/* product */}
        <Product title={"  Xiaomi Mi Earphone Basic with Ultra Deep Bass and Aluminum Alloy Sound ChamberWired in Ear Earphones with Mic Blue"} 
         image = {ear1} 
         price= {400} 
         rating= {4} />
        </div>
        <div className='home_row'>
        {/* product */}
        <Product title={"Apple iPhone 13 (128GB) - Blue"}
         image = {iphone13}
         price = {71990}
         rating = {5}
        />
        {/* product */}
        <Product  title={"Apple iPhone 13 Pro (128GB) - Graphite"}
        price ={119990}
        image = {iphone13pro}
        rating = {5}/>
        {/* product */}
        <Product title = {"Samsung Galaxy Z Fold3 5G (Phantom Silver, 12GB RAM, 256GB Storage) "}
        price ={139999}
        rating = {5}
        image = {galaxyz}
        
        />

        </div>
        <div className='home_row'>
        {/* product */}
        <Product  title={"2022 Apple MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​; Space Grey"}
        image = {mac}
        price={129900}
        rating ={5} />
        </div>

      </div>
      
    </div>
  )
}

export default Home
