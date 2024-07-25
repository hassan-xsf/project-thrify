import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './index'
import { useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'
import { Auth } from '../backend/userAuth'

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
                Auth.getPrefs()
                    .then((p) => dispatch(login({data: e , prefs: p})))
                    .catch((p) => {
                    dispatch(login({data: e}))
                    console.log("Prefs error: "+p)
                })
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
                </div>
            }
        </>
    )
}

export default App
