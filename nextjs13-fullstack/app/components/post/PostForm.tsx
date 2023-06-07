'use client'
import { createPost, updatePost } from '@/app/actions/postActions'
import { Post } from '@prisma/client'
import { useRouter } from 'next/navigation'
import InputField from '../customs/InputField'
import SubmitButton from '../customs/SubmitButton'

const PostForm = ({ id, post }: { id: string, post?: Post }) => {
  const router = useRouter()
  
  const handleAction = async (formData: FormData) => {
      const title = formData.get('title') as string
      const content =formData.get('content') as string

      if(title === '' || content === '') return

      if(post){
        await updatePost({ id: post.id, userId: id, title, content})
      }else{
        await createPost({ title, content, userId: id })
      }
      
      router.push('/')    
  }

  return (
    <form action={handleAction}  // ref={formRef}
    className='w-full max-w-sm px-4 xl:px-0'>
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4'> { post ? 'Update Post' :  'Create Post' } </h4>
        <InputField name='title' placeholder='Title...' label='Title' defaultValue={post?.title}
         />
        <InputField name='content' placeholder='About Post...' textarea label='Content'
        defaultValue={post?.content} />

        <>
          {
            post?.id ? <>
               <SubmitButton value='Update Post' />
            </> : 
            <SubmitButton value='Create Post'  />
          }
        </>
     </form>
  )
}

export default PostForm