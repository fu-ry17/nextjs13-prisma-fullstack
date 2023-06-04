import { Post } from '@prisma/client'
import React from 'react'

const PostDetailCard = ({ post}: { post: Post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p className='py-1'>{post.content}</p>
      <span> createdAt: {new Date(post.createdAt).toLocaleDateString()}</span>
    </div>
  )
}

export default PostDetailCard