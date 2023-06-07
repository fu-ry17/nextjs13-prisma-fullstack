'use client'
import React from 'react'
import { signIn }  from 'next-auth/react'
import { Button } from '@/components/ui/button'

const GoogleButton = () => {

  return (
    <div>
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4'> Welcome Back! </h4>
         
        <Button onClick={()=> signIn('google', { callbackUrl: '/' })}
        className='p-4 rounded-md'>
             Sign in with Google 
        </Button>
    </div>
  )
}

export default GoogleButton