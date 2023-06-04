"use client"
import useCustomRouter from '@/app/hooks/useCustomRouter'
import { postStore } from '@/app/store/postStore'
import { Post } from '@prisma/client'
import Link from 'next/link'
import React, { useTransition } from 'react'

const PostCard = ({ post, handleDelete }: { post: Post, handleDelete: (id: string) => void }) => {
  let [isPending, startTransition] = useTransition();
  const { setPost } = postStore()

  return (
    <div>
        <Link href={`/${post.id}`}>{post.title}</Link>
        <p>{post.content}</p>
        <div className='flex py-2 gap-x-3'>
           <button onClick={()=> setPost(post)}> update post </button>
            <button onClick={()=> startTransition(()=> handleDelete(post.id))} disabled={isPending}> 
             { isPending ? 'loading...' : 'delete post'} 
            </button>
        </div>
         
    </div>
  )
}

export default PostCard