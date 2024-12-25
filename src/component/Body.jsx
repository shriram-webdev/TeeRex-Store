import React from 'react'
import './body.css'

const Body = ({data}) => {

  const addToCart = (item)=> {
    localStorage.setItem(item.name,JSON.stringify(item))
  }

  return (
    <div className='prod-div'>
      {
        data.map(item => (
            <div key={item.id} className='prod'>
                <img src={item.imageURL} alt="prodImg"
                className='prod-img'
                 />
                <h3>{item.name} ${item.price}</h3>
                <button onClick={() =>addToCart(item)}>Add To Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Body
