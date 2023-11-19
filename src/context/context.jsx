'use client'
import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {

  const [cartItems, setCartItems] = useState([])

  function AddCart(getCurrentItem) {
    console.log(getCurrentItem)
    let cartItem = [...cartItems]
    const indexOfCurrentItem = cartItem.findIndex(item => item.id === getCurrentItem.id)

    if (indexOfCurrentItem === -1) {
      cartItem.push(getCurrentItem)
    }

    setCartItems(cartItem)
    localStorage.setItem('cartItems', JSON.stringify(cartItem))
  }


  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
  }, [])


  return (
    <Context.Provider value={{ cartItems, AddCart }}>
      {children}
    </Context.Provider>
  )
}


export default GlobalState