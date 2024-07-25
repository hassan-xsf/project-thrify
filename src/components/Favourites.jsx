import React, { useEffect, useState } from 'react'
import { Container, Button } from './index'
import { useSelector } from 'react-redux'
import { Post } from '../backend/postAuth'
import { useNavigate } from 'react-router-dom'

function FunctionCard({ data }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/ad/${id}`);
    }
    return (
        <div onClick = {() => handleClick(data.id)} className="flex items-center bg-white rounded-md shadow-lg py-1 px-1.5 gap-2 shadow-gray-400 hover:transition-all hover:scale-110 cursor-pointer">
            <div className="size-40">
                <img className="w-full h-full object-contain" src= {data.image}/>
            </div>
            <div className="flex flex-col">
                <span className="font-extrabold text-lg text-md sm:text-2xl">{data.title}</span>
                <span className="font-bold text-md sm:text-lg">Rs {data.price}</span>
                <span className="text-xs sm:text-base">Author: {data.author}</span>
                <span className="text-xs sm:text-base">Created at: {data.date}</span>

            </div>
        </div>
    )
}

function Favourites() {

    const userFavs = useSelector(state => state.auth.authData)
    const [favData, setFavData] = useState([]);

    useEffect(() => {
        const fetchFavData = async () => {
            const favs = await Promise.all(
                userFavs.prefs.ID.map(async (e) => {
                    const fData = await Post.getAd(e);
                    const date = new Date(fData.$updatedAt);
                    const cdate = date.toLocaleString();
                    const imgURL = await Post.getPicture(fData.image);
                    return {
                        id: e,
                        title: fData.title,
                        date: cdate,
                        author: fData.authorName,
                        price: fData.price,
                        image: imgURL,
                    };
                })
            );
            setFavData(favs);
        };

        fetchFavData();
    }, [userFavs]);

    return (
        <Container>
            <div className="bg-gray-100 px-4 tracking-tighter pt-8 text-gray-700 py-6 sm:px-20 sm:pt-16 flex flex-col gap-10">
                <span className="text-3xl text-orange-400 font-extrabold sm:text-4xl">Your Favourites ({userFavs.prefs.ID.length}/10)</span>
                <span>Go on all posts and click on Add to Favourites to add them into this list.</span>
                <div className="flex flex-col justify-center gap-4">
                    {
                        favData.map((data, index) => (
                            <FunctionCard key={index} data={data} />
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Favourites