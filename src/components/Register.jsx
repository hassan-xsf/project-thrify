import React, { useState, useEffect } from 'react'
import { Container, Button, Input } from './index'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Auth } from '../backend/userAuth'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

function Register() {
  const status = useSelector(state => state.auth.authStatus)
  const navigate = useNavigate();


  useEffect(() => {
    if (status) return navigate("/");
  }, [])

  const [error, setError] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [clicked, setClicked] = useState(false)

  const dispatch = useDispatch();

  const registerUser = async (e) => {
    setClicked(true)
    setError("")
    try {
      Auth.createAccount(e)
        .then(() => {
          console.log("Account created succesfully.")
          Auth.getUser()
            .then((e) => {
              Auth.setPref({ID: []})
                .then((e) => {
                  console.log("pref set!")
                })
                .catch((e) => {
                  console.log("PrefSet: "+e)
                })
              dispatch(login(e))
            })
            .catch((e) => dispatch(logout()))
            .finally(() => {
              navigate("/")
            })
        })
        .catch((e) => {
          console.log("There was an error" + e)
          setError(e.message)
        })
        .finally(() => {
          setClicked(false)
        })
    }
    catch (e) {
      setError(e.message)
      setClicked(false)
    }
  }

  return (

    <Container>
      <form onSubmit={handleSubmit(registerUser)} className=" bg-gray-100 flex flex-col justify-center items-center gap-4 py-24 drop-shadow-3xl">
        <h1 className="text-black text-xl">Register your account</h1>
        <div className="bg-white rounded-xl ring-1 ring-black py-6 px-8 gap-3 flex flex-col justify-center drop-shadow-2xl">
          <Input
            {...register("username", { required: true })}
            label="Username" placeholder="Enter your username" type="text"
          />
          <Input
            {...register("email", {
              required: true,
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address"
              }
            })}
            label="Email" placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-xs text-center">{errors.email.message}</span>}
          <Input
            {...register("password", { required: true })}
            label="Password" placeholder="Enter your password" type="password"
          />

          <Link to="/register" className="text-xs hover:text-orange-400 hover:underline text-gray-600">Already have an account?</Link>
          <span className="text-red-500 text-xs text-center max-w-24 mx-auto">{error}</span>
          <Button type="submit" disabled={clicked} className="text-sm py-1 w-full mt-2">{clicked ? "Loading..." : "Create Account"}</Button>
        </div>
      </form>
    </Container>
  )
}

export default Register