import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './index'
import { useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'
import { Auth } from '../backend/userAuth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false)

    // const favor = {
    //     favs : ['jkhekjejkwhkh1' ,'1239889ahsdakhsjdk12','dhsfskjhk1k312k']
    // }

    useEffect(() => {
        Auth.getUser()
            .then((e) => {
                // Auth.setPref(favor)
                //     .then((e) => console.log(e))
                //     .catch((e) => {
                //     console.log(e)
                // })
                dispatch(login(e))
            })
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
                    <ToastContainer autoClose = {1200} />
                </div>
            }
        </>
    )
}

export default App
