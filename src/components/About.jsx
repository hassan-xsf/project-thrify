import React from 'react'
import { Container } from './index'
import reactPic from '../assets/react.svg'
import appwritePic from '../assets/appwrite.png'

function About() {
    return (
        <>
            <Container>
                <div className="bg-gray-100 flex flex-col items-center justify-center py-14">
                    <div className = "flex flex-col items-center justify-center w-3/4">
                        <h1 className="text-center text-7xl font-extrabold text-orange-400">THRIFY</h1>
                        <h1 className="text-center text-xl font-light text-black">Your go-to online platform for thrifting items with ease. Discover, buy, and sell pre-loved treasures while saving money and promoting sustainability</h1>
                        <h1 className="text-center text-3xl font-bold text-orange-400 my-4">Credits & Techstack</h1>
                        <h1 className="text-center text-lg font-light text-black">Created by <span className = "text-orange-400 font-bold">Hassan Shakil</span> as a practice project using</h1>
                        <div className = "grid grid-rows-3 grid-cols-2 justify-center flex-col gap-1 mt-4">
                            <div className = "flex justify-center items-center gap-2 text-gray-700 font-semibold"><img className = "w-8" src = "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"/>tailwindcss</div>
                            <div className = "flex justify-center items-center text-gray-700 gap-2 font-semibold"><img className = "w-8" src = {reactPic}/>ReactJS</div>
                            <div className = "flex justify-center items-center text-gray-700 gap-2 font-semibold col-span-2"><img className = "w-10" src = {appwritePic}/>Appwrite</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About