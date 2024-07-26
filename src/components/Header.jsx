import React, { useState } from 'react'
import account from '../assets/account.png'
import heart from '../assets/heart.png'
import hamburger from '../assets/menu.png'
import closeHam from '../assets/closeHam.png'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { About } from './index'
import LogoutBtn from './LogoutBtn'
import { useRef } from 'react'

function Header() {

  const isLoggedIn = useSelector(state => state.auth.authStatus)
  const totalFavs = useSelector(state => state.auth.authData)
  const [Nav, toggleNav] = useState(false)
  const hamRef = useRef(null)
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
    },
    {
      name: "About",
      slug: "/about",
      active: true
    }
  ]

  return (
    <div className = "max-w-screen-xl mx-auto font-poppins sticky top-0 z-50">
      <div className=" h-14 rounded-sm bg-gray-100 px-4 flex justify-between items-center drop-shadow-lg sm:px-20">

        <Link className="text-3xl text-black font-extrabold hover:text-orange-300" to="/">thrify</Link>
        <ul className="hidden gap-10 font-semibold justify-center items-center text-gray-700 sm:flex">
          {
            navItems.map((item, ind) => (
              item.active &&
              <NavLink
                key={ind}
                to={item.slug}
                className={({ isActive }) =>
                  isActive ? "text-orange-300" : "no-underline"
                }
              >
                {item.name}
              </NavLink>
            ))

          }
          {isLoggedIn && <LogoutBtn />}
        </ul>
        <ul className="flex gap-3 justify-center items-center">
          <div className="relative">
            <Link to={isLoggedIn ? "/favs" : "/login"}>
              <img className="w-8" src={heart} />
            </Link>
            {isLoggedIn && <span className="text-white size-5 bg-orange-400 flex justify-center items-center rounded-full text-xs font-extrabold absolute left-4 top-0">{totalFavs?.prefs ? totalFavs?.prefs?.ID?.length : "0"}</span>}
          </div>
          <Link to={isLoggedIn ? "/myaccount" : "/login"}><img className="w-8" src={account} /></Link>
          <img className= {Nav ? "w-8 block sm:hidden": "w-6 block sm:hidden"} src={Nav ? closeHam : hamburger} onClick={() => toggleNav(!Nav)} />
        </ul>

      </div>
      {
        Nav &&
        <ul ref = {hamRef} className = "flex flex-col gap-2 items-center font-bold text-md text-orange-300 bg-white sm:hidden px-4 py-4 rounded-md drop-shadow-md transition-all ease-in duration-300">
          {
            navItems.map((item, ind) => (
              item.active &&
              <NavLink
                key={ind}
                to={item.slug}
                className={({ isActive }) =>
                  isActive ? "text-orange-300 w-3/4 text-center drop-shadow-lg ring-2 ring-gray-500 py-2 rounded-md" : "text-orange-300 no-underline w-3/4 text-center drop-shadow-lg ring-2 ring-gray-500 py-2 rounded-md" 
                }
              >
                {item.name}
              </NavLink>
            ))

          }
          {isLoggedIn && <LogoutBtn className = "text-orange-300 w-3/4 text-center drop-shadow-lg ring-2 ring-gray-500 py-2 rounded-md" />}
        </ul>
      }
    </div>

  )
}

export default Header