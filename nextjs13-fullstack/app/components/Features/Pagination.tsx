"use client"
import useCustomRouter from '@/app/hooks/useCustomRouter'
import { Button } from '@/components/ui/button'
import React from 'react'

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const newArray = [...Array(totalPages)].map((_,i) => i + 1)
  const { pushQuery, query } = useCustomRouter()

  return (
    <div className='flex gap-x-2 my-4 w-full'>
        {
            newArray.map(page => (
             <Button variant={Number(query.page) === page ? "default" : "outline" } key={page} onClick={()=> pushQuery({ page })} >
               {page}
             </Button>
            ))
        }
    </div>
  )
}

export default Pagination