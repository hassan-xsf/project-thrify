import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './index'
import { useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'
import { Auth } from '../backend/userAuth'

function App() {

    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        Auth.getUser()
            .then((e) => dispatch(login(e)))
            .catch((e) => dispatch(logout()))
            .finally(() => {
                setLoading(true)
            })
    }, [])
    return (
        <>
            {
                loading &&
                <div className="h-screen w-full">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            }
        </>
    )
}

export default App
