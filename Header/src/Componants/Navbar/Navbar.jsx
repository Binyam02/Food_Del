import React, { useState } from 'react'
import './Navbar.css'
import {  assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu")

    const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='navbar'>
       <Link to='/cart'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
            <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link></li>
            <li><a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a></li>
            <li><a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a></li>
            <li><a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a></li>
        </ul>
        <div className="navbar-right">
            <Link to='/cart'><img src={assets.search_icon} alt="" /></Link>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar