import React from 'react'
// import './App.css'
import './index.css'
import { NavBar } from './components/NavBar.jsx'

function App () {
  const [cartItems, setCartItems] = React.useState([])
  return (
    <>
      <NavBar />
    </>
  )
}

export default App
