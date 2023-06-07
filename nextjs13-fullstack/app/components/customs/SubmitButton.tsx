"use client"
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SubmitButton = ({ value }: { value: string }) => {
  const { pending } = useFormStatus() 

  return (
     <Button disabled={pending}>
        { pending ? <Loader2 className='animate-spin' />  : value }
     </Button>
  )
}

export default SubmitButton