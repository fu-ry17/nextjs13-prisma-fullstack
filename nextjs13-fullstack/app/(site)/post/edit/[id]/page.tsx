import { getPost } from '@/app/actions/postActions'
import PostForm from '@/app/components/post/PostForm'
import { authOptions } from '@/lib/authOptions'
import { Post } from '@prisma/client'
import { getServerSession } from 'next-auth'

const EditPost = async({ params}: { params: { id: string }}) => {
  const session = await getServerSession(authOptions)
  const post = await getPost(params.id)
  
  if(!session?.user){
    return <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4 capitalize'> Not Authenticated </h3>
  }

  if(!post){
    return <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4 capitalize'> No post was found </h3>
  }



  return (
    <div className='flex w-full h-screen justify-center items-center'>
       <PostForm id={session?.user.id as string} post={post as Post} />
     </div>
  )
}

export default EditPost