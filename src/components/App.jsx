import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer, Container } from './index'
import { useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'
import { Auth } from '../backend/userAuth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        Auth.getUser()
            .then((e) => {
                dispatch(login(e))
            })
            .catch(() => dispatch(logout()))
            .finally(() => {
                setLoading(true)
            })
    }, [])
    return (
        <>
            <div className="h-screen w-full">
                <Header />
                {
                    loading ? 
                        <Outlet /> : 
                        <Container>
                            <div className = "h-96 w-full bg-gray-200 animate-pulse"></div>
                        </Container>
                }
                <Footer />
                <ToastContainer autoClose={1200} />
            </div>

        </>
    )
}

export default App
