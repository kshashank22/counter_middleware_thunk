import React from 'react'
import './ListItems.css'

const ListItems = ({values}) => {
  return (
    <li className='listItems'>
      <p className='name'><span>Name:</span>{values.name}</p>
      <p className='phone'><span>Phone No:</span>{values.phone}</p>
    </li>
  )
}

export default ListItems
