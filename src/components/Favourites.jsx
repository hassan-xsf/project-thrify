import React from 'react'
import { Container, Button } from './index'
import { useSelector } from 'react-redux'

function Favourites() {

    const userFavs = useSelector(state => state.auth.authData)

    return (
        <Container>
            <div className="bg-gray-100 px-4 tracking-tighter pt-8 text-gray-700 py-6 sm:px-20 sm:pt-16 flex flex-col gap-10">
                <span className="text-3xl text-orange-400 font-extrabold sm:text-4xl">Your Favourites ({userFavs.prefs.ID.length}/10)</span>
                <span>Go on all posts and click on Add to Favourites to add them into this list.</span>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center bg-white rounded-md shadow-lg py-1 px-1.5 gap-2 shadow-gray-400 hover:transition-all hover:scale-110 cursor-pointer">
                        <div className="size-40">
                            <img className="w-full h-full object-contain" src="https://cdn.dribbble.com/users/240311/screenshots/6478026/gif_export_still_2x.gif?resize=400x0" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-lg text-md sm:text-2xl">My Lovely Sofa</span>
                            <span className="font-bold text-md sm:text-lg">Rs 14000</span>
                            <span className="text-xs sm:text-base">Author: Ali</span>
                            <span className="text-xs sm:text-base">Created at: 24/11/22 14:04 PM</span>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Favourites