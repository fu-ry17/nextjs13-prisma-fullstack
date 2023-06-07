"use client"
import { Button } from '@/components/ui/button'
import { Post } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useTransition } from 'react'

const ActionButtons = ({ post, handleDelete}: { post: Post, handleDelete: (id: string) => void}) => {
  let [isPending, startTransition] = useTransition();
  
  return (
    <div className='flex gap-6'>
       <Button asChild> 
         <Link href={`/post/edit/${post.id}`}> Update </Link>
       </Button>

       <Button variant="destructive" onClick={()=> startTransition(()=> handleDelete(post.id))} disabled={isPending}>
         { isPending ? <Loader2 className='animate-spin' /> : 'Delete'}
       </Button>
    </div>
  )
}

export default ActionButtons