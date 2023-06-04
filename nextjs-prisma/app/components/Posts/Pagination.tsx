"use client"
import useCustomRouter from '@/app/hooks/useCustomRouter'
import React from 'react'

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const newArray = [...Array(totalPages)].map((_,i) => i + 1)
  const { pushQuery } = useCustomRouter()

  return (
    <div className='flex gap-x-2 mt-4'>
        {
            newArray.map(page => (
             <span key={page} 
                onClick={()=> pushQuery({ page })}
              >
              {page}
             </span>
            ))
        }
    </div>
  )
}

export default Pagination