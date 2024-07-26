
import {Hero,Container} from './index'
import { Post } from '../backend/postAuth'
import { useEffect, useState } from 'react'


function Home() {

  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      await Post.getAds({limit: 20 , offset: 0})
        .then((e) => {
          const r = Math.floor((Math.random() * e.total));
          Post.getPicture(e.documents[r].image)
            .then((x) => {
              setData({x, ...e.documents[r]})
              setLoading(false)
            })
        })
    }
    fetchFeatured();
  }, [])

  return (
    <>
      {
        loading ? (<Container><div className = "h-96 bg-gray-300 w-full animate-pulse"></div></Container>) :  <Hero data = {data}/>
      }
    </>
  )
}

export default Home
