import React, { useState , useEffect } from 'react'
import {Container,Button,Input} from './index'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router'
import { useSelector , useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import { Auth } from '../backend/userAuth'

function Login() {

  const status = useSelector(state => state.auth.authStatus)
  const navigate = useNavigate();

 
  useEffect(() => {
    if(status) return navigate("/");
  }, [])

  const [error,setError] = useState("")
  const {register,handleSubmit, formState: {errors}} = useForm();
  const [clicked,setClicked] = useState(false)
  
  const dispatch = useDispatch();

  const loginUser = async(e) => {
    if(clicked) return;
    setClicked(true)
    setError("")
    try {
      Auth.loginAccount(e)
        .then(() => {
          console.log("Account logged in succesfully.")
          dispatch(login())
          navigate("/")
          
        })
        .catch((e) => {
          console.log("There was an error" +e)
          setError(e.message)
        })
        .finally(() => {
          setClicked(false)
        })
    }
    catch(e)
    {
      setError(e.message)
      setClicked(false)
    }
  }

  return (
    <Container>
        <form onSubmit = {handleSubmit(loginUser)} className = " bg-gray-100 flex flex-col justify-center items-center gap-4 py-24 drop-shadow-3xl">
            <h1 className = "text-black text-xl">Login to your account </h1>
            <div className = "bg-white rounded-xl ring-1 ring-black py-6 px-8 gap-3 flex flex-col justify-center drop-shadow-2xl">
                <Input 
                  {...register("email" , {
                  required: true,
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email address"
                  }
                  })}
                  label = "Email" placeholder = "Enter your email"
                />
                {errors.email && <span className = "text-red-500 text-xs text-center">{errors.email.message}</span>}
                <Input 
                  {...register("password" , {required: true})}
                  label = "Password" placeholder = "Enter your password" type = "password"
                />
                <Link to = "/register" className = "text-xs hover:text-orange-400 hover:underline text-gray-600">Don't have an account?</Link>
                <span className="text-red-500 text-xs text-center max-w-32 mx-auto">{error}</span>
                <Button type = "submit" disabled = {clicked} className = "text-sm py-1 w-full mt-2">{clicked ? "Loading..." : "Login"}</Button>
            </div>
        </form>
    </Container>
  )
}

export default Login