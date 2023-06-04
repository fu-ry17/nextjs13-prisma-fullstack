import { getPosts } from '../actions/postActions'
import Features from '../components/Features/Features'
import Pagination from '../components/Posts/Pagination'
import PostForm from '../components/Posts/PostForm'
import PostList from '../components/Posts/PostList'

const Home = async ({ searchParams }: { searchParams: any  }) => {
  const data = await getPosts(searchParams)

  return (
    <div className='p-4'>
        Home
        <PostForm />
        <Features />
        { data?.posts && data.posts.length > 0 ? 
            <PostList posts={data.posts} /> :  <h1> No post was found </h1> 
          }
        { data?.totalPages ? <Pagination totalPages={data.totalPages} /> : null }
    </div>
  )
}

export default Home