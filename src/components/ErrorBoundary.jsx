import React from 'react'
import {Container,Header,Footer} from './index'

function ErrorBoundary() {
  return (
    <>
        <Header/>
        <Container>
            <div className = "h-96 bg-gray-100">
                <h1 className = "text-center text-8xl">404 NOT FOUND</h1>
            </div>
        </Container>
        <Footer/>
    </>
  )
}

export default ErrorBoundary