import React from 'react'
import './Ads.css'
import Item from '../Ads/Item.json'

const Ads = () => {
  return (
    <div className='m23'>
      {
        Item.map((v, i) => {
          return <div className="cart" key={v.id}>
            <div className="cardimg">
              <img height={180} src={v.url} alt="" />
            </div>
            <div className="cardhead">
              <h4>{v.name}</h4>
            </div>
            <div className="cardprice">
              <h5>{`${v.price} PKR`}</h5>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Ads