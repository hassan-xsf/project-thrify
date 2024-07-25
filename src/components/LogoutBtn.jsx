import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import { Auth } from '../backend/userAuth';
import {toast} from 'react-toastify'

function LogoutBtn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.auth.authStatus)
  

  const handleLogout = () => {
    if(userStatus) {
        Auth.logoutAccount()
            .then(() => {
                toast.info("You have logged out succesfully!")
                dispatch(logout())
            })
            .finally(() => {
                navigate("/")
            })
    }
  }
  return (
    <>
      <button onClick = {handleLogout}>Logout</button>
    </>
  )
}

export default LogoutBtn