import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
            <b>&#8377;{props.new_price}</b>
            </div>
            <div className="item-price-old">
            <s>&#8377;{props.old_price}</s>
            </div>
        </div>
    </div>
  )
}

export default Item
