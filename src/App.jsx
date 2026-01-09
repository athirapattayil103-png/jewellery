import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopOnBudget from './components/ShopOnBudget'
import NewArrivals from './components/NewArrivals'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <ShopOnBudget/>
     <NewArrivals/>
    </div>
  )
}

export default App
