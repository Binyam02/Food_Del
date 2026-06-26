import React, { useState } from 'react'
import './Home.css'
import Header from '../../Componants/Navbar/Header/Header'
import ExpoareMenu from '../../Componants/ExploareMenu/ExpoareMenu'
import FoodDisplay from '../../Componants/FoodDisplay/FoodDisplay'
import AppDownaload from '../../Componants/AppDownaload/AppDownaload'

const Home = () => {
    const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExpoareMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownaload />
    </div>
  )
}

export default Home