import React from 'react'
import account from '../assets/account.png'
import heart from '../assets/heart.png'
import { useSelector } from 'react-redux'
import { Link , NavLink } from 'react-router-dom'
import {Container} from './index'
import LogoutBtn from './LogoutBtn'

function Header() {

  const isLoggedIn = useSelector(state => state.auth.authStatus)
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
    }
  ]

  return (
    <Container>
      <div className="h-14 rounded-sm bg-gray-100 px-20 flex justify-between items-center drop-shadow-lg">
        <Link className="text-3xl font-extrabold" to = "/">thrify</Link>
        <ul className="flex gap-10 font-semibold justify-center items-center text-gray-700">
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
          <img className="w-6" src={heart} />
          <img src={account} />
        </ul>
      </div>
    </Container>
  )
}

export default Header