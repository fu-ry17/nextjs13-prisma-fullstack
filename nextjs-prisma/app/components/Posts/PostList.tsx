"use client"
import { deletePost } from '@/app/actions/postActions';
import { experimental_useOptimistic as useOptimistic } from 'react';
import { Post } from '@prisma/client';
import PostCard from './PostCard';

const PostList = ({ posts }: { posts: Post[] }) => {
    const [optimisticPosts, addOptimisticPosts] = useOptimistic(
        { posts },
        (state, newPost: Post[]) => ({ ...state, posts: newPost }),
    );
    
    const handleDelete = async (id: string) => {
        const newPosts = posts.filter(p => p.id !== id)
        addOptimisticPosts(optimisticPosts.posts = newPosts)
        await deletePost(id)
    }  

  return (
    <div>
       { optimisticPosts.posts.map(p => <PostCard key={p.id} post={p} handleDelete={handleDelete} /> )}
    </div>
  )
}

export default PostList