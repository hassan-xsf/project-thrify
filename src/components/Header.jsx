import React, { useEffect, useState } from 'react'
import account from '../assets/account.png'
import heart from '../assets/heart.png'
import hamburger from '../assets/menu.png'
import { useSelector } from 'react-redux'
import { Link , NavLink } from 'react-router-dom'
import {Container} from './index'
import LogoutBtn from './LogoutBtn'

function Header() {

  const isLoggedIn = useSelector(state => state.auth.authStatus)
  const totalFavs = useSelector(state => state.auth.authData)

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !isLoggedIn
    },
    {
      name: "Register",
      slug: "/register",
      active: !isLoggedIn
    },
    {
      name: "View Ads",
      slug: "/ads",
      active: isLoggedIn
    },
    {
      name: "Create Ad",
      slug: "/create",
      active: isLoggedIn
    }
  ]

  return (
    <Container>
      <div className="h-14 rounded-sm bg-gray-100 px-4 flex justify-between items-center drop-shadow-lg sm:px-20">
        <Link className="text-3xl font-extrabold" to = "/">thrify</Link>
        <ul className="hidden gap-10 font-semibold justify-center items-center text-gray-700 sm:flex">
          {
            navItems.map((item,ind) => (
              item.active &&
                <NavLink
                  key = {ind}
                  to = {item.slug}
                  className = {({isActive}) =>
                    isActive ? "text-orange-300" : "no-underline"
                  }
                >
                {item.name}
                </NavLink>
            ))
            
          }
          {isLoggedIn && <LogoutBtn/>}
        </ul>
        <ul className="flex gap-3 justify-center items-center">
          <div className = "relative">
            <img className="w-8" src={heart}/>
            {isLoggedIn && <span className= "text-white size-5 bg-orange-400 flex justify-center items-center rounded-full text-xs font-extrabold absolute left-4 top-0">{totalFavs.prefs ? totalFavs.prefs?.ID.length : "0"}</span>}
          </div>
          <img className = "w-8" src={account} />
          <img className = "w-6 block sm:hidden" src = {hamburger}/>
        </ul>
      </div>
    </Container>
  )
}

export default Header