import React, { useEffect } from 'react'
import { Container , Button} from './index'
import { useNavigate , Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MyAccount() {
    const navigate = useNavigate();

    const status = useSelector(state => state.auth.authStatus)
    const auth = useSelector(state => state.auth.authData)

    useEffect(() => {
        if (!status) return navigate("/login");
    }, [])

    return (
        status &&
        <Container>
            <div className="bg-gray-100 px-4 tracking-tighter pt-8 py-6 sm:px-20 sm:pt-16 flex flex-col gap-10">
            <span className="text-3xl text-orange-400 font-extrabold sm:text-4xl">My Account</span>
            <span>Welcome to your dashboard, Mr. {auth.name}</span>
                <div className = "grid grid-cols-2 ring-4 ring-gray-300 items-center mb-2">
                    <div className = "bg-white p-2 font-semibold">Username </div>
                    <div className = "bg-white p-2">{auth.name}</div>
                    <div className = "bg-gray-200 p-2 font-semibold">Email</div>
                    <div className = "bg-gray-200 p-2">{auth.email}</div>
                    <div className = "bg-white p-2 font-semibold">Created at</div>
                    <div className = "bg-white p-2">{auth.$createdAt}</div>
                    <div className = "bg-gray-200  p-2 font-semibold">Email Verified</div>
                    <div className = "bg-gray-200 p-2 text-red-400">false</div>
                    <div className = "bg-white p-2 text-white">x</div>
                    <div className = "bg-white p-2 text-white">x</div>
                    <div className = "bg-orange-300 p-2 text-white font-semibold">Total Favourites</div>
                    <div className = "bg-orange-300 p-2 text-white">{auth.prefs.ID.length} / 10</div>
                </div>
                <Link to = "/favs" className = "flex justify-center items-center"><Button>View Favourites</Button></Link>
            </div>
        </Container>
    )
}

export default MyAccount