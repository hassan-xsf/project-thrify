import React, { useEffect, useState } from 'react'
import { Container, PostCard, Button } from '../index'
import { Post } from '../../backend/postAuth'

function AllPosts() {

  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [total,setTotal] = useState(0)

  useEffect(() => {
    const fetchAdData = async () => {
      const posts = await Post.getAds({ offset: offset })
      setTotal(posts.total)
      if (posts) {
        const finalData = await Promise.all(
            posts.documents.map(async(p) => {
            const imgURL = await Post.getPicture(p.image)
            // console.log({id: p.$id, title: p.title , price: p.price , author: p.author, picture: imgURL})
            return {id: p.$id, title: p.title , price: p.price , author: p.authorName, picture: imgURL};
          })
        )
        setData(prev => [...prev, ...finalData])
        setLoading(false)
      }
    }
    fetchAdData();
  }, [offset])

  const handleClick = () => {
    console.log(`DEBUG: ${offset+4} : ${total}`)
    if(total > offset+4) {
      setOffset(s => s+4)
    }
  }

  return (
    loading || (
      <Container>
        <div className="bg-gray-100 px-4 pt-8 text-gray-700 py-6 flex flex-col items-center sm:px-20 sm:pt-16">
          <div className="grid grid-cols-1 gap-y-5 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
               data && (
                  data.map((postAdData,ind) => {
                    return <PostCard key = {ind} data = {postAdData}/>
                  })
               )
            }
          </div>
          <Button disabled = {total < offset+4} className = "my-6" onClick = {() => handleClick()}>Load More..</Button>
        </div>

      </Container>
    )
  )
}

export default AllPosts