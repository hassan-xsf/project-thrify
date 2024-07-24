import React from 'react'
import {Container,Button} from '../index'
import sofa from '../../assets/sofa.jpg'
import { useParams } from 'react-router-dom'

function ViewAd() {

  const {ID} = useParams();

  console.log(ID)
  return (
    <Container>
        <div className = "bg-gray-100 px-20 tracking-tighter pt-16 text-gray-700 py-6">
            <div className = "grid grid-rows-1 grid-cols-2">
                <div className = "bg-gray-100 ring-4 ring-orange-200 flex justify-center items-center rounded-md w-full">
                    <img className = "h-[95%] w-full rounded-sm object-contain" src = {sofa}/>
                </div>
                <div className = "flex flex-col justify-center ml-10">
                    <span className = "text-orange-300 font-extrabold text-4xl">A Luxury Plant Box</span>
                    <span className = "mb-4">A sofa is a versatile and comfortable piece of furniture designed for seating multiple people. Typically found in living rooms, it features a cushioned seat, backrest, and armrests.</span>
                    <span className = "pb-4 text-xl font-light text-black flex flex-col">
                        <span className = "text-orange-300 font-bold">Category</span>
                        Furniture
                    </span>
                    <span className = "pb-4 text-xl font-light text-black flex flex-col">
                        <span className = "text-orange-300 font-bold">Post By</span>
                        Hassan
                    </span>  
                    <span className = "pb-4 text-xl font-light text-black flex flex-col">
                        <span className = "text-orange-300 font-bold">Date Posted</span>
                        24/1/2024
                    </span>     
                    <span className= "text-2xl font-extrabold text-black mt-4 mb-4 tracking-wider">Rs 24000</span>                
                    <Button className = "w-full">Add to Favourites</Button>
                </div>
            </div>
        
        </div>
    </Container>

  )
}

export default ViewAd

