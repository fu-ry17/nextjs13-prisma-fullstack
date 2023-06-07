import { getPost } from "@/app/actions/postActions"
import PostDetails from "@/app/components/post/PostDetails"
import { Post, User } from "@prisma/client"

const Post = async({ params}: { params: { id: string }}) => {
  const post = await getPost(params.id)

  if(!post){
    <h3 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4 capitalize'> No post was found </h3>
  }

  return (
    <div className='flex flex-col w-full h-screen items-center max-w-lg mx-auto p-4 xl:p-0'>
       <PostDetails post={post as Post & { user: User }} />
    </div>
  )
}

export default Post