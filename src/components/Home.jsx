
import {Hero} from './index'
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
        loading || <Hero data = {data}/>
      }
    </>
  )
}

export default Home
