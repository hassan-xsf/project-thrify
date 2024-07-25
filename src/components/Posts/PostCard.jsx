import React from 'react'
import sofa from '../../assets/sofa.jpg'
import {Button} from '../index'

function PostCard() {

    return (
        <div className="flex flex-col bg-white rounded-md shadow-lg shadow-gray-400 py-1 px-1.5 gap-2 h-[80%] hover:transition-all hover:scale-110 cursor-pointer">
            <div className="h-1/2">
                <img className="h-full w-full rounded-md object-cover object-center" src={sofa} />
            </div>
            <div className="flex flex-col gap-1 font-poppins">
                <span className="font-light text-black text-md text-center">Luxury Sofa</span>
                <span className="h-1 w-full bg-orange-300 rounded-lg"></span>
                <span className="font-base text-black text-xs mt-1">Author: Hassan</span>
                <span className="font-bold text-black text-lg mt-1">Rs 69000</span>
                <Button className="text-xs w-full">Click to View</Button>
            </div>
        </div>
    )
}

export default PostCard