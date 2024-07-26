import React from 'react'
import { Container, Button } from './index'
import { useNavigate } from 'react-router-dom'

function Hero({ data }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ad/${data.$id}`);
    }
    return (
        <Container>
            <div className="bg-gray-100 px-4 tracking-tighter pt-8 text-gray-700 py-6 sm:px-20 sm:pt-16">
                <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
                    <div className="flex flex-col justify-center order-2 sm:order-none items-center sm:items-start sm:w-3/4">
                        <span className="pb-2 text-xl font-light text-black sm:pb-8">Featured Advertisements:</span>
                        <span className="text-orange-300 font-extrabold text-6xl sm:text-6xl lg:text-7xl xl:text-7xl">{data.category}</span>
                        <span className="text-center sm:text-start w-3/4">{data.content}</span>
                        <span className="text-2xl font-extrabold text-black mt-10 mb-4 tracking-wider">Rs {data.price}</span>
                        <Button onClick={() => handleClick()}>View Ad</Button>
                    </div>
                    <div className="bg-gray-200 flex justify-center items-center rounded-md h-96">
                        <img className="h-[95%] w-[95%] rounded-sm object-cover" src={data.x} />
                    </div>
                </div>
                <div className="h-10 bg-gray-100 flex justify-center items-center mt-5 gap-5 text-orange-400">
                    <button className="bg-orange-400 rounded-full w-6">.</button>
                    <button className="bg-orange-400 rounded-full w-6">.</button>
                    <button className="bg-orange-400 rounded-full w-6">.</button>
                </div>

            </div>
        </Container>

    )
}

export default Hero

