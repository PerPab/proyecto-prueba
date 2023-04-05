import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Cart.css'
import { useContext } from 'react'
import { miContexto } from '../../../context'

const Cart = () => {
  const {itemsAgregados} = useContext(miContexto)
  return (
    <>
    <NavBar />
    <div className='container-carrito'>
      <span className='texto-carrito'>En carrito hay {itemsAgregados} productos agregados</span>
    </div>
    </>
  )
}

export default Cart