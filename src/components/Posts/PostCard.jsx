import React from 'react'
import {Button} from '../index'
import { useNavigate } from 'react-router-dom';

function PostCard({data}) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/ad/${id}`);
    }
    return (
        <div onClick = {() => handleClick(data.id)} className="flex flex-col bg-white rounded-md shadow-lg shadow-gray-400 py-1 px-1.5 gap-2 h-[100%] hover:transition-all hover:scale-105 cursor-pointer">
            <div className="h-40 w-full">
                <img className="w-full h-full object-contain rounded-md" src={data.picture} />
            </div>
            <div className="flex flex-col gap-1 font-poppins h-38">
                <span className="font-light text-black text-md text-center">{data.title}</span>
                <span className="h-1 w-full bg-orange-300 rounded-lg"></span>
                <span className="font-base text-black text-xs mt-1">Category: {data.author}</span>
                <span className="font-base text-black text-xs mt-1">Ad By: {data.author}</span>
                <span className="font-bold text-black text-lg mt-1">Rs {data.price}</span>
                <Button className="text-xs w-full">Click to View</Button>
            </div>
        </div>
    )
}

export default PostCard