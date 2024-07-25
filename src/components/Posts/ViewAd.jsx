import React, { useState, useEffect } from 'react'
import { Container, Button } from '../index'
import sofa from '../../assets/sofa.jpg'
import { useParams } from 'react-router-dom'
import { Post } from '../../backend/postAuth'
import { Auth } from '../../backend/userAuth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../store/userSlice'
import { toast} from 'react-toastify'


function ViewAd() {

    const navigate = useNavigate();
    const { ID } = useParams();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const dispatch = useDispatch();
    const userFavs = useSelector(state => state.auth.authData)
    const [userFav, setuserFav] = useState(false)

    useEffect(() => {
        Post.getAd(ID)
            .then((e) => {
                Post.getPicture(e.image)
                    .then((img) => {

                        const date = new Date(e.$updatedAt)
                        const cdate = date.toLocaleString();
                        setData({ cdate, img, ...e })
                        setuserFav(userFavs.prefs.ID.find(x => x == ID))
                        setLoading(false)
                    })
                    .catch(() => {
                        setData({ sofa, ...e })
                        setLoading(false)
                        console.log("Error retreiving image")
                    })
            })
            .catch((e) => {
                navigate("/notfound")
                console.log("There was an error" + e)
            })
    }, [])
    const handleClick = () => {
        if (userFav) {
            const nobj = userFavs.prefs.ID.filter(i => i != ID)
            Auth.setPref({ID: nobj})
                .then((e) => {
                    dispatch(updateUser(e))
                    toast.info("Removed from favourite!");
                    setuserFav(false)
                })
                .catch((e) => {
                    console.log(e)
                    console.log("Error adding favourite..")
                })
        }
        else {
            if(userFavs.prefs.ID.length >= 10) return toast.error("You have reached maximum favourites limit..");
            const obj = {
                ID: [
                    ID,
                    ...userFavs.prefs.ID
                ]
            }


            console.log(obj)
            Auth.setPref(obj)
                .then((e) => {
                    dispatch(updateUser(e))
                    setuserFav(true)
                    toast.info("Added to favourite ❤️");
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }


    return (
        !loading &&
        <Container>
            <div className="bg-gray-100 px-4 tracking-tighter pt-8 text-gray-700 py-6 sm:px-20 sm:pt-16">
                <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 h-[90%] sm:h-full sm:max-h-96">
                    <div className="bg-gray-100 ring-2 ring-orange-200 flex justify-center items-center rounded-md max-h-96 sm:max-h-full">
                        <img className="h-[95%] rounded-sm object-cover" src={data.img} />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center sm:ml-10 sm:items-start sm:text-start">
                        <span className="text-orange-300 font-extrabold text-4xl">{data.title}</span>
                        <span className="mb-4 max-w-md break-words">{data.content}</span>
                        <span className="pb-4 text-xl font-light text-black flex flex-col">
                            <span className="text-orange-300 font-bold">Category</span>
                            {data.category}
                        </span>
                        <span className="pb-4 text-xl font-light text-black flex flex-col">
                            <span className="text-orange-300 font-bold">Post By</span>
                            {data.authorName}
                        </span>
                        <span className="pb-4 text-xl font-light text-black flex flex-col">
                            <span className="text-orange-300 font-bold">Date Posted</span>
                            {data.cdate}
                        </span>
                        <span className="text-2xl font-extrabold text-black mt-4 mb-4 tracking-wider">Rs {data.price}</span>
                        <Button onClick={handleClick} className="w-full">{userFav ? "Remove from Favourites" : "Add to Favourites"}</Button>
                    </div>
                </div>

            </div>
        </Container>

    )
}

export default ViewAd

