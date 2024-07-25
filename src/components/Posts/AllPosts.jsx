import React , {useEffect} from 'react'
import { Container, PostCard , Button } from '../index'
import { Post } from '../../backend/postAuth'

function AllPosts() {

  useEffect(() => {
      Post.getAds()
          .then((e) => {
              console.log(e.documents)
          })
          .catch((e) => {
              console.log("Error: "+e)
          })
  }, [])

  return (
    <Container>
      <div className="bg-gray-100 px-4 pt-8 text-gray-700 py-6 flex flex-col items-center sm:px-20 sm:pt-16">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            Array(8).fill(0).map((_, ind) => {
              return <PostCard/>
            })
          }
        </div>
        <Button>Load More..</Button>
      </div>

    </Container>
  )
}

export default AllPosts