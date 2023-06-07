"use client"
import { Post } from '@prisma/client'
import { experimental_useOptimistic as useOptimistic } from 'react';
import PostCard from './PostCard'
import { deletePost } from '@/app/actions/postActions';

const PostList = ({ posts}: { posts: Post[]}) => {
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPost: Post[]) => ({ ...state, posts: newPost }),
  );

  const handleDelete = async(id: string) => { 
    const newPosts = posts.filter(p => p.id !== id)
    await deletePost(id)
    addOptimisticPosts(optimisticPosts.posts = newPosts)
  }


  return (
    <div className='w-full'>
        { optimisticPosts.posts.map(p => <PostCard key={p.id} post={p} handleDelete={handleDelete} />)}
    </div>
  )
}

export default PostList