import React from 'react'
import Item from '../Item'

const ItemList = ({listProductos}) => {
  return (
    <section className='items'>
      {listProductos.map(producto => <Item key={producto.id} producto={producto} />)}
    </section>
  )
}

export default ItemList