import React , {useState} from 'react'
import {Container , Input , Button} from '../index'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { Post } from '../../backend/postAuth';
import { useNavigate } from 'react-router-dom';
import { categories } from './categories';

function AdForm({post}) {

  const {register,handleSubmit} = useForm();
  const [textArea,setTextArea] = useState("")
  const [error,setError] = useState("")
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [clicked,setClicked] = useState(false)
  
  const navigate = useNavigate();

  const userId = useSelector(state => state.auth.authData)

  const createPost = (e) => {
    const fObj = {title: e.title , content: textArea , author: userId.$id}
    console.log(fObj)
    setError("")
    if(!clicked) return; // CHANGE IT LATER
    setClicked(true)

    try {
        Post.createPicture(image)
            .then((e) => {
                Post.createAd({image: e.$id, ...fObj})
                    .then((e) => {
                        console.log(e)
                        navigate("/")
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
    if(file)
    {
        if(['image/png', 'image/gif', 'image/jpeg'].includes(file.type)) 
        {
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
        <div className = "bg-gray-100 px-20 tracking-tight pt-16 text-gray-700 py-16 flex justify-center flex-col items-cen">
            <span className = "text-center font-light text-xl pb-4">Creating a new advertisement post...</span>
            {error == "" || <span className = "text-center text-red-500 font-bold text-sm pb-14">{error}</span>}
            <form onSubmit = {handleSubmit(createPost)} className = "flex flex-col gap-12">
                <div className = "grid grid-cols-2 grid-rows-1">
                    <div className = "w-3/4 flex flex-col gap-2">
                        <Input
                            {...register("title", { required: true })}
                            label="Advertisement Title" placeholder="Enter your advertisement's title" type="text"
                        />
                        <label className = "text-xs font-bold text-gray-700">Advertisement Content:</label>
                        <textarea
                            id="multiLineInput"
                            value={textArea}
                            onChange={(e) => setTextArea(e.target.value)}
                            rows="8"
                            cols="50"
                            className = "font-sans text-xs py-1.5 pl-1 mr-10 pr-2 w-full ring-1 outline-none ring-gray-300 rounded-md"
                        />
                        <div className = "flex flex-col justify-center">
                            <Input
                                {...register("price", { required: true })}
                                label = "Price" placeholder="Enter price for your item" type="text"
                            />
                            <select className = "font-sans text-xs py-1.5 w-1/3 ring-1 outline-none ring-gray-300 rounded-md">
                                <option>test</option>
                                <option>test</option>
                            </select>

                        </div>
                    </div>
                    <div className = "w-3/4 flex flex-col gap-2">
                        <Input
                            {...register("picture", { required: true })}
                            onChange = {handleImageChange}
                            label="Advertisement Picture" placeholder="Enter your advertisement's title" type="file" accept="image/png, image/gif, image/jpeg"
                            />
                        <div className = "max-h-40">
                        {
                            imagePreviewUrl &&
                            <img className = "h-full w-full object-cover rounded-md" src = {imagePreviewUrl}/>
                        }
                        </div>
                    </div>
                </div>
                <div className = "flex justify-center">
                    <Button disabled = {clicked} className = "col-span-2">{clicked ? "" : "POST ADVERTISEMENT"}</Button>
                </div>
            </form>
        </div>
        
    </Container>
  )
}

export default AdForm