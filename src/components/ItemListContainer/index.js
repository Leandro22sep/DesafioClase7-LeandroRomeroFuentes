import React from 'react'
import ItemList from '../ItemList'
import { customFetch } from '../../assets/customFetch'
import { useState, useEffect } from 'react'
import { productos } from '../../assets/productos'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const[listProductos,setListProductos] = useState([])
  const[loading,setLoading] = useState(false)
  useEffect(() => {
    customFetch(productos)
      .then(data => {
        setLoading(true)
        setListProductos(data)
      })
  },[])

  return (
    <>
      {!loading && <div>cargando...</div>}
      {loading && <ItemList listProductos = {listProductos}/>}
    </>
  )
}

export default ItemListContainer