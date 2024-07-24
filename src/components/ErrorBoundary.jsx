import React from 'react'
import {Container,Header,Footer} from './index'
import emoji404 from '../assets/emoji404.png'

function ErrorBoundary() {
  return (
    <>
        <Header/>
        <Container>
            <div className = "bg-gray-100 flex flex-col items-center justify-center py-28">
                <img className = "w-48" src = {emoji404}/>
                <h1 className = "text-center text-8xl font-extrabold text-orange-400">404</h1>
                <h1 className = "text-center text-2xl font-bold text-black">PAGE NOT FOUND</h1>
            </div>
        </Container>
        <Footer/>
    </>
  )
}

export default ErrorBoundary