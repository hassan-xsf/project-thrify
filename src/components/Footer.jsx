import React from 'react'
import {Container} from './index'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Container>
        <div className = "text-center bg-gray-900 place-items-start p-8 grid grid-rows-1 grid-cols-4 text-white text-opacity-90 tracking-tight text-sm">
            <div className = "flex flex-col items-start w-1/2 text-start gap-5 col-span-2">
              <Link className="text-3xl font-extrabold text-orange-300" to = "/">thrify</Link>
              <span>Thrify is an online thrifting website, Where people from all around the world can sell their thrift items for cheap prices.</span>
              <span>Made by Hassan Shakil.</span>
            </div>
            <div className = "flex flex-col items-start text-start gap-5">
              <Link className="text-xl font-semibold">Help</Link>
              <ul className = "flex flex-col gap-3">
                <li>Contact</li>
                <li>Blog</li>
                <li>Terms & Condition</li>
                <li>About</li>
              </ul>
            </div>
            <div className = "flex flex-col items-start text-start gap-5">
              <Link className="text-xl font-semibold">Services</Link>
              <ul className = "flex flex-col gap-3">
                <li>Featured Ads</li>
                <li>View All</li>
                <li>Post</li>
              </ul>
            </div>
        </div>
    </Container>
  )
}

export default Footer