import React from 'react'
import "../../Styles/Templates/Header.css"
import { NavLink } from "react-router-dom";



function Header() {
  return (
    <>
      <header>
        <h1><NavLink to="/">Sweets Eccomerce</NavLink></h1>

        <div className='home_search_bar'>

          <input type="search" placeholder='search here' name='search' id='search' />

          <button>
            <i class="fas fa-search"></i>
          </button>


        </div>

        <div className="header_options">
          <i class="fas fa-shopping-cart"></i>
          <NavLink to="/login">Login</NavLink>
        </div>







      </header>

      <footer>All Rights are Reserved</footer>

    </>
  )
}

export default Header