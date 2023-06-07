"use client"
import { Post } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import ActionButtons from './ActionButtons'

const PostCard = ({ post, handleDelete }: { post: Post, handleDelete: (id: string) => void }) => {
  const { data, status } = useSession()

  return (
    <div className='mb-4'>
        <Link href={`/post/${post.id as string}`}
        className='text-lg font-semibold tracking-tight mb-2 capitalize hover:underline'> {post.title} </Link>
        <p className='text-justify mb-2'> {post.content}</p>
      
        {  status === "loading" ? <Loader2 className='animate-spin' /> :  data?.user.id === post.userId &&
           <ActionButtons post={post} handleDelete={handleDelete} />   }
    </div>
  )
}

export default PostCard