"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SignOutButton from '../auth/SignOutButton'

const NavBar = ({ id }: { id: string }) => {

  return (
    <div className='w-full flex justify-between py-2'>
    <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mb-4'> Blog </h1> 
     {
        id && <Button asChild>
           <Link href="/create-post">Create Post</Link>
        </Button>
     }
     {
        id ? <SignOutButton /> : <Button asChild>
            <Link href="/signIn">Sign In</Link>
        </Button>
     }
    </div>
  )
}

export default NavBar