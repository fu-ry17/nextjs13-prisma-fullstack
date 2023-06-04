'use client'
import React, { useRef } from 'react'
import SubmitButton from '../SubmitButton'
import { createPost, updatePost } from '@/app/actions/postActions'
import { postStore } from '@/app/store/postStore'

const PostForm = () => {
  const formRef = useRef<any>()
  const { post, setPost } = postStore()

  const handleAction = async (formData: FormData) => {
      const title = formData.get('title') as string
      const content = formData.get('content') as string
     
      if(post?.id){
        await updatePost({ id: post?.id, title, content })
        setPost(null)
      }else{
        await createPost({ title, content })
      }
      formRef.current.reset()
  }

  return (
    <form action={handleAction} ref={formRef}>
        <input type="text" name="title" placeholder='Title' required 
        defaultValue={post?.id ? post?.title : ''} />
        <textarea name='content' placeholder='Content' required
        defaultValue={post?.id ? post.content : ''} />
        {
           post?.id ? <>
            <SubmitButton value='Update Post' />
            <button onClick={()=> setPost(null)}> cancel </button>
           </>
           : <SubmitButton value='Add Post' />
        }
       
    </form>
  )
}

export default PostForm