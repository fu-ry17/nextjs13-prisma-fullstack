import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const SubmitButton = ({ value }: { value: string }) => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' className='bg-black text-white text-md p-2 rounded-md' disabled={pending}>
        { pending ? 'loading...' :  value}
    </button>
  )
}

export default SubmitButton