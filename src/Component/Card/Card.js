import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="cardimg">
          <img width={180} src="https://image.shutterstock.com/image-vector/realistic-soccer-ball-football-on-260nw-1340503238.jpg" alt="" />
        </div>
        <div className="cardhead">
          <h3>{props.name}</h3>
        </div>
        <div className="cardprice">
          <h5>{props.price}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card