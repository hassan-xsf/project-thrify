import React from 'react'
import {Container,Button} from './index'
import sofa from '../assets/sofa.jpg'

function Hero() {
  return (
    <Container>
        <div className = "bg-gray-100 px-20 tracking-tighter pt-16 text-gray-700 py-6">
            <div className = "grid grid-rows-1 grid-cols-2">
                <div className = "flex flex-col justify-center w-3/4">
                    <span className = "pb-8 text-xl font-light text-black">Featured Advertisements:</span>
                    <span className = "text-orange-300 font-extrabold text-8xl">Furniture</span>
                    <span className = "">A sofa is a versatile and comfortable piece of furniture designed for seating multiple people. Typically found in living rooms, it features a cushioned seat, backrest, and armrests.</span>
                    <span className= "text-2xl font-extrabold text-black mt-10 mb-4 tracking-wider">$400</span>
                    <Button onClick = {() => alert("test")}>View Ad</Button>
                </div>
                <div className = "bg-gray-100 flex justify-center items-center rounded-md">
                    <img className = "h-[95%] rounded-sm" src = {sofa}/>
                </div>
            </div>
            <div className = "h-10 bg-gray-100 flex justify-center items-center gap-5 text-black">
                <button className = "bg-black rounded-full w-6">.</button>
                <button className = "bg-black rounded-full w-6">.</button>
                <button className = "bg-black rounded-full w-6">.</button>
            </div>
        
        </div>
    </Container>

  )
}

export default Hero

