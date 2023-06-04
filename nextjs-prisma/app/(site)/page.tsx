import { getPosts } from '../actions/postActions'
import Features from '../components/Features/Features'
import Pagination from '../components/Posts/Pagination'
import PostForm from '../components/Posts/PostForm'
import PostList from '../components/Posts/PostList'

const Home = async ({ searchParams }: { searchParams: any  }) => {
  const data  = await getPosts(searchParams)

  return (
    <div className='p-4'>
        Home
        <PostForm />
        <Features />
        { data?.posts ? <PostList posts={data.posts} /> : null }
        { data?.totalPages ? <Pagination totalPages={data.totalPages} /> : null }
    </div>
  )
}

export default Home