import { getPost } from '@/app/actions/postActions'
import PostDetailCard from '@/app/components/Posts/PostDetailCard'


const PostDetails = async({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id)

  return (
    <div className='p-4'>
      { post ? <PostDetailCard post={post}  /> : null }
    </div>
  )
}

export default PostDetails