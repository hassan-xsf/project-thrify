import React, { useState } from 'react'
import { Container, Input, Button } from '../index'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { Post } from '../../backend/postAuth';
import { useNavigate } from 'react-router-dom';
import { categories } from './categories';
import {toast} from 'react-toastify'

function AdForm({ post }) {

    const { register, handleSubmit } = useForm();
    const [textArea, setTextArea] = useState("")
    const [error, setError] = useState("")
    const [image, setImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [clicked, setClicked] = useState(false)
    const [select,setSelect] = useState(categories[0])


    const navigate = useNavigate();

    const userId = useSelector(state => state.auth.authData)
    const status = useSelector(state => state.auth.authStatus)
  
  
    useEffect(() => {
      if (!status) return navigate("/");
    }, [])
    const createPost = (e) => {

        if (clicked) return;
        const fObj = { title: e.title, content: textArea, author: userId.$id , authorName: userId.name , price: e.price , category: select}
        setError("")
        setClicked(true)

        try {
            Post.createPicture(image)
                .then((e) => {
                    Post.createAd({ image: e.$id, ...fObj })
                        .then((e) => {
                            toast.success("Advertisement has been successfully created!")
                            navigate(`/ad/${e.$id}`)
                        })
                        .catch((e) => {
                            setError(e.message)
                        })
                        .finally(() => {
                            setClicked(false)
                        })
                })
                .catch((e) => {
                    setError(e.message)
                })
                .finally(() => {
                    setClicked(false)
                })
            // Post.createAd(fObj)

        } catch (error) {
            setError(error.message)
            setClicked(false)
        }
    }

    const handleImageChange = (e) => {
        setError("")
        const file = e.target.files[0];
        if (file) {
            if (['image/png', 'image/gif', 'image/jpeg'].includes(file.type)) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImage(file);
                    setImagePreviewUrl(reader.result);
                };
                reader.readAsDataURL(file);
            }
            else {
                setError("Invalid image format, supported ones are: png,gif,jpeg")
                e.target.value = "";
            }
        }
    }
    return (
        <Container>
            <div className="bg-gray-100 px-4 tracking-tight pt-6 text-gray-700 py-16 flex justify-center flex-col sm:pt-16 sm:px-20">
                <span className="text-center font-light text-lg pb-4 sm:text-xl">Creating a new advertisement post...</span>
                {error == "" || <span className="text-center text-red-500 font-bold text-sm pb-14">{error}</span>}
                <form onSubmit={handleSubmit(createPost)} className="flex flex-col gap-12">
                    <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 place-items-center sm:place-items-start">
                        <div className="w-3/4 flex flex-col gap-2">
                            <Input
                                {...register("title", { required: true })}
                                label="Advertisement Title" placeholder="Enter your advertisement's title" type="text"
                            />
                            <label className="text-xs font-bold text-gray-700">Advertisement Content:</label>
                            <textarea
                                id="multiLineInput"
                                value={textArea}
                                onChange={(e) => setTextArea(e.target.value)}
                                rows="8"
                                cols="50"
                                className="font-sans text-xs py-1.5 pl-1 mr-10 pr-2 w-full ring-1 outline-none ring-gray-300 rounded-md"
                            />
                            <Input
                                {...register("price", { required: true })}
                                label="Price" placeholder="Enter price for your item" type="number"
                            />
                            <label className="text-xs font-bold text-gray-700">Select a category: </label>
                            <select onChange = {(e) => setSelect(e.target.value)} className="text-xs py-1.5 w-1/3 ring-1 outline-none ring-gray-300 rounded-md mb-3 sm:mb-0">
                                {
                                    categories.map((e,ind) => (
                                        <option className = "font-poppins" key = {ind}>{e}</option>
                                    ))
                                }
                            </select>

                        </div>
                        <div className="w-3/4 flex flex-col gap-2">
                            <Input
                                {...register("picture", { required: true })}
                                onChange={handleImageChange}
                                label="Advertisement Picture" placeholder="Enter your advertisement's title" type="file" accept="image/png, image/gif, image/jpeg"
                            />
                            <div className="max-h-60">
                                {
                                    imagePreviewUrl &&
                                    <img className="max-h-60 w-full object-cover rounded-md" src={imagePreviewUrl} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button disabled={clicked} className="text-xs sm:text-base">{clicked ? "POSTING..." : "POST ADVERTISEMENT"}</Button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default AdForm