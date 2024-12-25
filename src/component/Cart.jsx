import Nav from "./Nav";

import React, { useEffect, useState } from 'react'

const Cart = () => {

    const [cartItem , setCartItem] = useState([])

    useEffect(()=>{
        let arr = []
        for(let i=0; i< localStorage.length; i++){
            let key = localStorage.key(i)
            let item = JSON.parse(localStorage.getItem(key));
            arr.push(item)
        }
        setCartItem(arr)
    },[])

    const removeItem = (item) => {
        localStorage.removeItem(item.name)
        setCartItem(prev => prev.filter(cartItem => cartItem.name !== item.name))
    }
    
  return (
    <div>
      <Nav/>
      <div className='prod-div'>
      {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <div key={item.id} className='prod'>
              <img src={item.imageURL} alt="prodImg" className='prod-img' />
              <h3>{item.name} ${item.price}</h3>
              <button onClick={() => removeItem(item)}>Remove Item</button>
            </div>
          ))
        ) : (
          <h1>Your cart is empty.</h1>
        )}
    </div>
    </div>
  )
}

export default Cart
