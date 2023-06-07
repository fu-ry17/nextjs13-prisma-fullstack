import PostForm from '@/app/components/post/PostForm'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'

const CreatePost = async() => {
  const session = await getServerSession(authOptions)
  
  if(!session?.user){
    return <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4 capitalize'> Not Authenticated </h3>
  }

  return (
    <div className='flex w-full h-screen justify-center items-center'>
       <PostForm id={session?.user.id as string} />
     </div>
  )
}

export default CreatePost