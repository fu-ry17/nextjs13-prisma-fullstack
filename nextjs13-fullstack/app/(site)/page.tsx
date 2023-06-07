import { Post } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/authOptions'
import { getPosts } from '../actions/postActions'
import Features from '../components/Features'
import NavBar from '../components/nav/NavBar'
import PostList from '../components/post/PostList'
import Pagination from '../components/Features/Pagination'

const Home = async({ searchParams }: { searchParams: any }) => {
  const data = await getPosts(searchParams)
  const session = await getServerSession(authOptions)

  return (
    <div className='flex flex-col w-full h-screen items-center max-w-lg mx-auto p-4 xl:p-0 mb-8'>
      <NavBar id={session?.user.id as string} />

      <Features />
        
      <div className='w-full'>
        <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4 capitalize'> Posts </h3>
        {
          data?.posts.length === 0 ? 
          <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4'> No post was found </h1> :
          <PostList posts={data?.posts as Post[]} />
        }
      </div>

      <Pagination totalPages={data?.totalPages as number} />

    </div>
  )
}

export default Home