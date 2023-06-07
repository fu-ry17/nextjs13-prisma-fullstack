"use client"
import { Post, User } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import ActionButtons from './ActionButtons'
import Image from 'next/image'
import { deletePost } from '@/app/actions/postActions'
import { useRouter } from 'next/navigation'

const PostDetails = ({ post }: { post: Post & { user: User } }) => {
  const router = useRouter()
  const { data, status } = useSession()

  const handleDelete = async(id: string) => {
    await deletePost(id)
    router.push('/')
  }

  return (
    <div className='mb-4 w-full'>
        <h1
        className='text-lg font-semibold tracking-tight mb-2 capitalize hover:underline'> {post?.title} </h1>
        <p className='text-justify mb-2'> {post?.content}</p>
        <div className='flex gap-x-2 items-center mb-4'>
            <Image src={post?.user?.image as string} alt='username' width={48} height={48} 
            className='rounded-full' />

            <div>
               <h3>{post.user.name}</h3>
            </div>

        </div>
        {  status === "loading" ? <Loader2 className='animate-spin' /> :  data?.user.id === post.userId &&
        <ActionButtons post={post} handleDelete={handleDelete} />   }
    </div>
  )
}

export default PostDetails