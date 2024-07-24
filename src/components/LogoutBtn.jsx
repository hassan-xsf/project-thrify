import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import { Auth } from '../backend/userAuth';

function LogoutBtn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.auth.authStatus)
  

  const handleLogout = () => {
    if(userStatus) {
        Auth.logoutAccount()
            .then(() => {
                dispatch(logout())
            })
            .finally(() => {
                navigate("/")
            })
    }
  }
  return (
    <button onClick = {handleLogout}>Logout</button>
  )
}

export default LogoutBtn